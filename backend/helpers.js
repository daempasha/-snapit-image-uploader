const { Storage } = require("@google-cloud/storage");
/**
 *
 * @param { File } object file object that will be uploaded
 * @description - This function does the following
 * - It uploads a file to the image bucket on Google Cwloud
 * - It accepts an object as an argument with the
 *   "originalname" and "buffer" as keys
 */

const storage = new Storage()
const bucket = storage.bucket(process.env.GCS_BUCKET || "")


const uploadImage = (file) => new Promise((resolve, reject) => {
    if (!file) {
        reject(`Unable to upload, no image passed!`)
    }


    const formattedOriginalName = file.originalname.replace(/ /g, "_")
    const blob = bucket.file(formattedOriginalName)
    const blobStream = blob.createWriteStream({
        resumable: false
    })

    blobStream
        .on('finish', () => {
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`
            resolve(publicUrl)
        })
        .on('error', () => {
            reject(`Unable to upload image, something went wrong`)
        })
        .end(file.buffer)
})

module.exports.uploadImage = uploadImage
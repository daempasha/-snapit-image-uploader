import { Storage } from "@google-cloud/storage";
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


export const uploadImage = (file: Express.Multer.File | undefined) => new Promise((resolve, reject) => {
    if (!file) {
        reject(`Unable to upload no image`)
    }


    const formattedOriginalName = file!.originalname.replace(/ /g, "_")
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
        .end(file!.buffer)
})

// export const uploadImage = async (file: Express.Multer.File | undefined): Promise<any> => {
//     if (!file) {
//         return undefined
//     }

//     const blob = bucket.file(file.originalname);
//     const blobStream = blob.createWriteStream({
//         metadata: {
//             contentType: file.mimetype
//         }
//     })

//     blobStream.on("error", (err) => {
//         Promise.reject(new Error("Could not upload file!"))
//     })
//     blobStream.on("finish", () => {
//         Promise.resolve({ "message": "Successfully uploaded image!", "url": `https://storage.cloud.google.com/${process.env.GCS_BUCKET}}/${file.originalname}` })
//     })
//     blobStream.end(file.buffer)

// }

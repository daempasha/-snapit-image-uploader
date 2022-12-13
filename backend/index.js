const express = require('express')
const cors = require('cors')
const multer = require("multer");
const fs = require("fs")
const dotenv = require("dotenv")
const cloudinary = require("cloudinary");
const app = express()
const upload = multer({ dest: "uploads/" });

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

app.use(cors({
    origin: "https://snapit-image-uploader-frontend.onrender.com"
}))
app.use(express.json())
const port = 8000

app.get('/', (req, res) => {
    res.send('Hello World!')
})


async function uploadToCloudinary(localPath) {
    var mainFolderName = "main";
    var filePathOnCloudinary =
        mainFolderName + "/" + localPath;

    return cloudinary.uploader
        .upload(localPath, { public_id: filePathOnCloudinary })

}

app.post("/api/upload-file", upload.single("image"), async (req, res) => {
    const localPath = req.file.path
    const response = await uploadToCloudinary(localPath)
        .then((result) => {
            fs.unlinkSync(localPath);

            res.status(201).send({
                message: "Successfully uploaded image!",
                url: result.url,
            });
        })
        .catch((error) => {
            fs.unlinkSync(localPath);
            res.status(400).send({ message: "Failed to upload image!", url: undefined });
        });

    res.send(response)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
const express = require('express');
const router = express.Router();
const UploadFiles = require('../models/fileSchema');
const multer = require('multer');
const path = require('path');
const { v2: cloudinary } = require('cloudinary');
const { jwtAuthMiddleware } = require("../jwt");
const streamifier = require("streamifier");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/upload-reports", jwtAuthMiddleware, upload.array("files", 5), async (req, res) => {
    try {
        let results = [];
        for (const file of req.files) {
            const result = await new Promise((resolve, reject) => {
                let stream = cloudinary.uploader.upload_stream(
                    { folder: "reports" },
                    (error, result) => {
                        if (result) resolve(result);
                        else reject(error);
                    }
                );
                streamifier.createReadStream(file.buffer).pipe(stream);
            });
            results.push(result);
        }

        const newFile = new UploadFiles({
            userId: req.user.id,
            date: req.body.date,
            disease: req.body.disease,
            doctorName: req.body.doctorName,
            hospitalName: req.body.hospitalName,
            expenditure: req.body.expenditure,
            remark: req.body.remark,
            upload: results.map(r => r.secure_url),
        });

        await newFile.save();

        res.status(200).json({
            message: "Files uploaded successfully",
            urls: results.map(r => r.secure_url),
        });
    } catch (err) {
        console.error("Upload failed:", err);
        res.status(500).json({ error: err.message || "Upload failed" });
    }

});

router.get("/view-reports", jwtAuthMiddleware, async (req, res) => {
    try {
        const reports = await UploadFiles.find({ userId: req.user.id });
        if(!reports || reports.length === 0){
            return res.status(404).json({message: "No files found"})
        }
        res.status(200).json(reports);
    } catch (err) {
        console.error("Fetched reports error", err);
        res.status(500).json({ error: err.message || "Server error" });
    }
});

module.exports = router;
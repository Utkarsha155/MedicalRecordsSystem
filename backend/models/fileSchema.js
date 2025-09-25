const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const fileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true
    },
    date: {
        type: String,
    },
    disease: {
        type: String,
    },
    doctorName: {
        type: String,
    },
    hospitalName: {
        type: String,
    },
    expenditure: {
        type: String,
    },
    upload :[{
        type: String,
    }],
    remark : {
        type: String,
    },
});


const FileUploads = mongoose.model("FileUploads", fileSchema);
module.exports = FileUploads;
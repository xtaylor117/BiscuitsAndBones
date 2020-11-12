const aws = require('aws-sdk');
const multer = require("multer");
const multerS3 = require('multer-s3');
require('dotenv').config()
const keys = require('../config/keys')

const s3 = new aws.S3(); 
aws.config.update({
    // secretAccessKey: process.env.AWS_ACCESS_KEY_ID,
    // accessKeyId: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-west-1"
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
    }
};

const upload = multer({
    fileFilter,
    storage: multerS3({      
        acl: "public-read",
        s3,
        bucket: "biscuitsandbones-profilepics",
        metadata: function (req, file, cb) {
            cb(null, { fieldname: "TESTING_METADATA"});
        },
        // contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            cb(null, file.originalname);
        },
    }),
});

module.exports = upload;
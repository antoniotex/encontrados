import AWS from 'aws-sdk';
import multer from 'multer';
import multers3 from 'multer-s3';
import path from 'path';
require('dotenv/config');

AWS.config.update({
  secretAccessKey: process.env.AWS_SECRET_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

const fileFilter = function (req: any, file: any, cb: any) {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg'
  ) {
    cb(null, true);
  } else {
    // Rejeita o armazenamento
    cb(null, false);
  }
};

const uploadS3 = multer({
  fileFilter: fileFilter,
  storage: multers3({
    s3: s3,
    bucket: process.env.AWS_BUCKET || 'encontrados',
    acl: 'public-read',
    metadata: function (req, res, cb) {
      cb(null, { fieldName: 'TESTING_METADATA' });
    },
    key: function (req, file, cb) {
      cb(
        null,
        path.basename(file.originalname, path.extname(file.originalname)) +
          '-' +
          Date.now() +
          path.extname(file.originalname)
      );
    },
  }),
});

export default uploadS3;

const path = require("path");
const { v4 } = require("uuid");
const multer = require("multer");

const uploadFolder = path.resolve(__dirname, "./../../../web/public/imgs");

const uploadConfig = {
  uploadFolder,
  storage: multer.diskStorage({
    destination: uploadFolder,
    filename(req, file, callback) {
      const fileName = `${v4()}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};

module.exports = uploadConfig;
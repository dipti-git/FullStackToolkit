const cloudinary = require("../utils/cloudinaryConfig");
// const fs = require("fs");

const uploadFile = async (req, res, err) => {
  try {
     // Check if the file was provided
    if(!req.file) {
      return res.status(400).json({message: 'No file uploaded'});
    }

    console.log('Uploading to Cloudinary...');
    // Upload file to Cloudinary
    const cloudinaryUploadResponse = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto"
    });
   
    console.log("Your file is uploaded on Cloudinary ", cloudinaryUploadResponse.url);
   
    } catch (error) {
      console.error(error);
      // fs.unlinkSync(req.file.path);
      // return null;
    }
};
console.log(uploadFile, "uploadfile");

module.exports = { uploadFile };

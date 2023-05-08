const cloudinary = require('cloudinary').v2;

// Configuration 
cloudinary.config({
    cloud_name: "dx7c7wkhu",
    api_key: "494366914314342",
    api_secret: "62K0a8HBbX4U4i48gHVY0fNItCM"
});

const opts = {
    overwrite: true,
    invalidate: true,
    resource_type: "auto"
};

module.exports = (image) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(image, opts, (error, result) =>{
            if (result && result.secure_url) {
                console.log(result.secure_url);
                return resolve(result.secure_url);
            }
            console.log(error.message);
            return reject({message: error.message});
        });
    });
};
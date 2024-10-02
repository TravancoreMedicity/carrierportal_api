const { insertProfile } = require('../uploadFile/upload.service')
const multer = require('multer');
const path = require('path');
const fs = require("fs")




// for multiple file upload
const storagemul = multer.diskStorage({
    destination: (req, file, cb) => {

        const id = req.body.em_id;
        const filepath = path.join('D:/Career/Resume', `${id}`);

        if (!fs.existsSync(filepath)) {
            fs.mkdirSync(filepath, { recursive: true });
        }

        cb(null, filepath);
    },
    filename: function (req, file, cb) {
        // Generate a unique filename using a timestamp
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = path.extname(file.originalname);
        const filename = 'Resume' + uniqueSuffix + extension;
        cb(null, filename);

    },

});

// for certificate upload
const storagemulCertificate = multer.diskStorage({
    destination: (req, file, cb) => {

        const id = req.body.em_id;
        const filepath = path.join('D:/Career/Resume', `${id}`);

        if (!fs.existsSync(filepath)) {
            fs.mkdirSync(filepath, { recursive: true });
        }

        cb(null, filepath);
    },
    filename: function (req, file, cb) {
        // Generate a unique filename using a timestamp
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = path.extname(file.originalname);
        const filename = 'Resume' + uniqueSuffix + extension;
        cb(null, filename);

    },

});
// for profile pic upload
const storagemulpropic = multer.diskStorage({
    destination: (req, file, cb) => {

        const id = req.body.em_id;
        const em_id_folder = path.join('D:/Career/profilePicture', `${id}`);

        if (fs.existsSync(em_id_folder)) {
            // If it exists, delete all files inside
            const existingFiles = fs.readdirSync(em_id_folder);
            for (const file of existingFiles) {
                fs.unlinkSync(path.join(em_id_folder, file));
            }
        } else {
            // If it doesn't exist, create the folder
            fs.mkdirSync(em_id_folder, { recursive: true });
        }


        cb(null, em_id_folder);
    },
    filename: function (req, file, cb) {
        // Generate a unique filename using a timestamp
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = path.extname(file.originalname);
        const filename = 'Resume' + uniqueSuffix + extension;
        cb(null, filename);

    },

});
const maxSize = 2 * 1024 * 1024

// for certificate
const uploadmulCertificate = multer({
    storage: storagemulCertificate,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg" ||
            file.mimetype == "application/pdf" // Add PDF mimetype
        ) {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg, .jpeg, and .pdf format allowed!'));
        }
    },
    limits: { fileSize: maxSize }
}).array('files', 10);
// for multiple file upload
const uploadmul = multer({
    storage: storagemul,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg" ||
            file.mimetype == "application/pdf" // Add PDF mimetype
        ) {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg, .jpeg, and .pdf format allowed!'));
        }
    },
    limits: { fileSize: maxSize }
}).array('files', 10);

//for profile picture
const uploadmulpropic = multer({
    storage: storagemulpropic,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg" ||
            file.mimetype == "application/pdf" // Add PDF mimetype
        ) {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg, .jpeg, and .pdf format allowed!'));
        }
    },
    limits: { fileSize: maxSize }
}).array('files', 10);
module.exports = {

    // for multiple file upload

    uploadfilemultiple: (req, res) => {
        uploadmul(req, res, async (err) => {
            const body = req.body;
            if (err instanceof multer.MulterError) {
                return res.status(200).json({
                    status: 0,
                    message: "Max file size 2MB allowed!",
                });
            } else if (err) {
                // logger.errorLogger(err);
                return res.status(200).json({
                    status: 0,
                    message: err.message,
                });
            } else if (!req.files || req.files.length === 0) {
                return res.status(200).json({
                    status: 0,
                    message: "Files are required!",
                });
            } else {
                try {
                    const files = req.files;
                    const em_id = body.em_id;
                    const em_id_folder = path.join('D:/Career/Resume', `${em_id}`);

                    // Create the em_id folder if it doesn't exist
                    if (!fs.existsSync(em_id_folder)) {
                        fs.mkdirSync(em_id_folder, { recursive: true });
                    }

                    for (const file of files) {
                        // Process each file individually
                        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                        const extension = path.extname(file.originalname);
                        const currentDate = new Date();
                        const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`;
                        const filename = 'resumeCareer&' + formattedDate + extension;


                        // Move the file to the destination folder
                        const destinationPath = path.join(em_id_folder, filename);
                        fs.renameSync(file.path, destinationPath);
                    }
                    res.status(200).json({
                        success: 1,
                        message: "Files uploaded successfully!"
                    });
                } catch (error) {
                    //   logger.errorLogger(error);
                    return res.status(200).json({
                        success: 0,
                        message: "An error occurred during file upload.",
                    });
                }
            }
        });
    },
    // for getting the file
    checklistfiles: (req, res) => {
        const { ApplicationId } = req.body;
        const folderPath = `D:/Career/Resume/${ApplicationId}`;
        fs.readdir(folderPath, (err, files) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            return res.status(200).json({
                success: 1,
                data: files
            });
        });

    },
    // For deleting a specific file
    uploadfiledelete: (req, res) => {
        const { ApplicationId, filename } = req.body;
        if (!filename) {
            return res.status(400).json({
                success: 0,
                message: 'Filename is required'
            });
        }

        const filePath = path.join(`D:/Career/Resume/${ApplicationId}`, filename);

        fs.unlink(filePath, (err) => {
            if (err) {

                return res.status(500).json({
                    success: 0,
                    message: 'Error deleting file'
                });
            }

            return res.status(200).json({
                success: 1,
                message: 'File deleted successfully'
            });
        });
    },

    // for certificate upload
    uploadfilemultipleCertificate: (req, res) => {
        uploadmulCertificate(req, res, async (err) => {
            const body = req.body;

            if (err instanceof multer.MulterError) {
                return res.status(400).json({
                    status: 0,
                    message: "Max file size 2MB allowed!",
                });
            } else if (err) {
                // logger.errorLogger(err);
                return res.status(500).json({
                    status: 0,
                    message: err.message,
                });
            } else if (!req.files || req.files.length === 0) {
                return res.status(400).json({
                    status: 0,
                    message: "Files are required!",
                });
            } else {
                try {
                    const files = req.files;
                    const em_id = body.em_id;
                    const qual = body.value;
                    const em_id_folder = path.join('D:/Career/Certificate', `${em_id}`);

                    // Create the em_id folder if it doesn't exist
                    if (!fs.existsSync(em_id_folder)) {
                        fs.mkdirSync(em_id_folder, { recursive: true });
                    }

                    for (const file of files) {
                        let filename;
                        const extension = path.extname(file.originalname);
                        const currentDate = new Date();
                        const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`;

                        if (qual == 1) {
                            filename = '10th_certificate&' + formattedDate + extension;
                        } else if (qual == 2) {
                            filename = '12th_certificate&' + formattedDate + extension;
                        } else if (qual == 3) {
                            filename = 'UG_certificate&' + formattedDate + extension;
                        } else if (qual == 4) {
                            filename = 'PG_certificate&' + formattedDate + extension;
                        } else if (qual == 5) {
                            filename = 'Other_certificate&' + formattedDate + extension;
                        } else if (qual == 6) {
                            filename = 'Resume&' + formattedDate + extension;
                        }
                        else {
                            filename = file.originalname;
                        }

                        // Move the file to the destination folder
                        const destinationPath = path.join(em_id_folder, filename);

                        try {
                            fs.renameSync(file.path, destinationPath);
                        } catch (fileError) {
                            // Handle file rename errors
                            return res.status(500).json({
                                success: 0,
                                message: "Error moving file: " + fileError.message,
                            });
                        }
                    }

                    res.status(200).json({
                        success: 1,
                        message: "Files uploaded successfully!",
                    });
                } catch (error) {
                    // logger.errorLogger(error);
                    return res.status(500).json({
                        success: 0,
                        message: "An error occurred during file upload.",
                    });
                }
            }
        });
    },

    // for getting the Certificate file
    checklistcertificate: (req, res) => {
        const { ApplicationId } = req.body;
        const folderPath = `D:/Career/Certificate/${ApplicationId}`;
        fs.readdir(folderPath, (err, files) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            return res.status(200).json({
                success: 1,
                data: files
            });
        });

    },
    // certificate delete
    uploadCertfiledelete: (req, res) => {
        const { ApplicationId, filename } = req.body;
        if (!filename) {
            return res.status(400).json({
                success: 0,
                message: 'Filename is required'
            });
        }

        const filePath = path.join(`D:/Career/Certificate/${ApplicationId}`, filename);

        fs.unlink(filePath, (err) => {
            if (err) {

                return res.status(500).json({
                    success: 0,
                    message: 'Error deleting file'
                });
            }

            return res.status(200).json({
                success: 1,
                message: 'File deleted successfully'
            });
        });
    },
    uploadImage: (req, res) => {
        uploadmulpropic(req, res, async (err) => {
            const body = req.body;
            if (err instanceof multer.MulterError) {
                return res.status(200).json({
                    status: 0,
                    message: "Max file size 2MB allowed!",
                });
            } else if (err) {
                return res.status(200).json({
                    status: 0,
                    message: err.message,
                });
            } else if (!req.files || req.files.length === 0) {
                return res.status(200).json({
                    status: 0,
                    message: "Files are required!",
                });
            } else {
                try {
                    const files = req.files;
                    const em_id = body.em_id;
                    const em_id_folder = path.join('D:/Career/profilePicture', `${em_id}`);

                    for (const file of files) {
                        const extension = path.extname(file.originalname);
                        const FileName = file.originalname;
                        const currentDate = new Date();
                        const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`;
                        const filename = `${FileName}${formattedDate}${extension}`;

                        // Move the file to the destination folder
                        const destinationPath = path.join(em_id_folder, filename);
                        fs.renameSync(file.path, destinationPath);
                    }
                    res.status(200).json({
                        success: 1,
                        message: "Profile Picture Changed Successfully!"
                    });
                } catch (error) {
                    return res.status(200).json({
                        success: 0,
                        message: "An error occurred during file upload.",
                    });
                }
            }
        });
    },


    checklistpropic: (req, res) => {
        const { ApplicationId } = req.body;
        const folderPath = `D:/Career/profilePicture/${ApplicationId}`;
        fs.readdir(folderPath, (err, files) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    successimg: 0,
                    message: err
                });
            }
            return res.status(200).json({
                successimg: 1,
                dataimg: files
            });
        });

    },
}

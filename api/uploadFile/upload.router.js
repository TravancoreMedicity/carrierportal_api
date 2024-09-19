const router = require('express').Router();
// const { checkToken } = require('../../auth/token_validation');

const { uploadfilemultiple, checklistfiles, uploadfiledelete, uploadfilemultipleCertificate, checklistcertificate, uploadCertfiledelete } = require('../uploadFile/upload.controller');


router.post("/uploadmultiple", uploadfilemultiple);
router.post("/files", checklistfiles);
router.post("/deletefile", uploadfiledelete);

// for certificate upload
router.post("/uploadmultipleCertificate", uploadfilemultipleCertificate);
router.post("/filesCertificate", checklistcertificate);
router.post("/deleteCertfile", uploadCertfiledelete);



module.exports = router
const router = require('express').Router();
// const { checkToken } = require('../../auth/token_validation');

const { getSaluationName, getRegionBypin, getReligion, getBloodgrp, getEducation, getSpecializationById, getname, vacancyList,
    insertapplicationform, getPersonaldata, getCourseById, getUniversity, getBoardById, geteducation, } = require('../CommonCode/common.controller');


router.get("/getSalutation", getSaluationName)
router.get('/region/bypin/:id', getRegionBypin)
router.get("/Religion", getReligion);
router.get('/bloodgroup', getBloodgrp);
router.get('/education', getEducation)
router.post("/eduname", getname)
router.post("/list", vacancyList)
router.post("/insertdata", insertapplicationform)
router.get('/PersonalData/:id', getPersonaldata)
router.get('/course/ById', getCourseById)
router.post('/specialization/ById', getSpecializationById);
router.get("/getUniver", getUniversity)
router.get("/getBoard", getBoardById) // get Board by education
router.get("/educationDetails/:id", geteducation)





module.exports = router
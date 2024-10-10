const router = require('express').Router();
// const { checkToken } = require('../../auth/token_validation');

const { getSaluationName, getRegionBypin, getReligion, getBloodgrp, getEducation, getSpecializationById, getname, vacancyList, deleteexpdata, updataedudata, deleteEdudata,
    insertapplicationform, getPersonaldata, getCourseById, getUniversity, getBoardById, geteducation, insertdataexpdata, insertdataedudata, updataexpdata, getDistrictName } = require('../CommonCode/common.controller');


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
router.post("/insertdataexpdata", insertdataexpdata)
router.post("/insertdataedudata", insertdataedudata)
router.post("/updataexpdata", updataexpdata)
router.post("/deleteexpdata", deleteexpdata)
router.post("/updataedudata", updataedudata)
router.post("/deleteEdudata", deleteEdudata)
router.get("/getdist", getDistrictName)





module.exports = router
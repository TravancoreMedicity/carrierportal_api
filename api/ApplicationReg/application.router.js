const router = require('express').Router();
const { checkToken } = require('../../auth/token_validation');

const { app_registration, getregistration, getPaymentStaus, updatePaymentStatus, getApplicationStatus, postApplication, getCourseInfo, insertCourseSelection,
    getSubmittedCourse, getFullApplication, courseCompleted } = require('./application.controller');


router.post('/app_registration', checkToken, app_registration)
router.get('/getregistration/:id', checkToken, getregistration)
router.get('/getPaymentStatus/:id', checkToken, getPaymentStaus)
router.post('/updatePayment', checkToken, updatePaymentStatus)
router.get('/getApplicationStatus/:id', checkToken, getApplicationStatus)
router.post('/postapplication', checkToken, postApplication)
router.get('/getCources', checkToken, getCourseInfo)
router.post('/postCourseSelection', checkToken, insertCourseSelection)
router.get('/getSubmittedCourse/:id', checkToken, getSubmittedCourse)
router.get('/getFullApplication/:id', checkToken, getFullApplication)

router.get('/courseCompleted/:id', checkToken, courseCompleted)

module.exports = router
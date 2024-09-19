const router = require('express').Router();
const { checkToken } = require('../../auth/token_validation');

const { getcarrerdata, insertskilldata, getSkillData, updateSkills, deleteskills, insertHobbiesdata, getHobbiesData, updateHobbies, updatelang, insertReference,
    deleteHobbies, insertLangdata, getLangData, getreference, updateref, deleteref, insertCertification, getCertification, updateCertification,
    deletecertification, getAppledJob, getAppledJobDetails, updateJob, getjobdata, getSkilldata } = require('../Carrer/career.controller');


router.get('/approvalget/all', getcarrerdata)

//skill data

router.post('/insertskilldata', insertskilldata)
router.post("/skills/get", getSkillData)
router.post("/Updateskilldata", updateSkills)
router.delete('/skills/delete/:id', deleteskills)

//Hobbies
router.post('/insertHobbiesdata', insertHobbiesdata)
router.post("/Hobbies/get", getHobbiesData)
router.post("/UpdateHobbiesdata", updateHobbies)
router.delete('/Hobbies/delete/:id', deleteHobbies)

// lanaguge
router.post('/insertLangdata', insertLangdata)
router.post("/lang/get", getLangData)
router.post("/UpdateLangdata", updatelang)

//reference
router.post('/InsertReference', insertReference)
router.post("/reference/get", getreference)
router.post("/UpdateReference", updateref)
router.delete(`/Reference/delete/:id`, deleteref)

//certification
router.post(`/InsertCertification`, insertCertification)
router.post("/Certification/get", getCertification)
router.post(`/UpdateCertification`, updateCertification)
router.delete(`/Certification/delete/:id`, deletecertification)

//applied job
router.post("/appliedJob", getAppledJob)
router.post("/appliedJobdetails", getAppledJobDetails)
router.post("/updateJob", updateJob)

//jobdescription
router.get('/jobdesc', getjobdata)
router.get('/jobSkill', getSkilldata)



module.exports = router
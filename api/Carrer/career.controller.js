
const { getcarrerdata, insertskilldata, getSkillData, updateSkills, deleteskills, insertHobbiesdata, getHobbiesData, updateHobbies, updatelang, insertReference,
    deleteHobbies, insertLangdata, getLangData, getreference, updateref, deleteref, insertCertification, getCertification, updateCertification,
    deletecertification, getAppledJob, getAppledJobDetails, updateJob, getjobdata, getSkilldata } = require('../Carrer/career.service')
module.exports = {

    getcarrerdata: (req, res) => {
        getcarrerdata((err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 2,
                    message: err
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "No results found"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },

    insertskilldata: (req, res) => {
        const body = req.body;
        insertskilldata(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err,
                    data: []
                });
            }

            if (!results) {
                return res.status(200).json({
                    success: 1,
                    message: "Not inserted",
                    data: []
                });
            }

            return res.status(200).json({
                success: 2,
                message: 'Inserted successfully',
                data: results
            });
        });
    },
    getSkillData: (req, res) => {
        const body = req.body
        getSkillData(body, (err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: res.err
                });
            }

            if (results.length === 0) {
                return res.status(200).json({
                    success: 2,
                    message: "Record Not Found",
                    data: []

                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },

    updateSkills: (req, res) => {
        const body = req.body;
        updateSkills(body, (err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (!results) {
                return res.status(200).json({
                    success: 1,
                    message: "Record Not Found"
                });
            }

            return res.status(200).json({
                success: 2,
                message: "Data Updated Successfully"
            });

        });
    },

    deleteskills: (req, res) => {
        const id = req.params.id;
        deleteskills(id, (err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                message: "Data Deleted Successfully"
            });
        });

    },

    insertHobbiesdata: (req, res) => {
        const body = req.body;
        insertHobbiesdata(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err,
                    data: []
                });
            }

            if (!results) {
                return res.status(200).json({
                    success: 1,
                    message: "Not inserted",
                    data: []
                });
            }

            return res.status(200).json({
                success: 2,
                message: 'Inserted successfully',
                data: results
            });
        });
    },

    getHobbiesData: (req, res) => {
        const body = req.body
        getHobbiesData(body, (err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: res.err
                });
            }

            if (results.length === 0) {
                return res.status(200).json({
                    success: 2,
                    message: "Record Not Found",
                    data: []

                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },

    updateHobbies: (req, res) => {
        const body = req.body;
        updateHobbies(body, (err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (!results) {
                return res.status(200).json({
                    success: 1,
                    message: "Record Not Found"
                });
            }

            return res.status(200).json({
                success: 2,
                message: "Data Updated Successfully"
            });

        });
    },

    deleteHobbies: (req, res) => {
        const id = req.params.id;
        deleteHobbies(id, (err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                message: "Data Deleted Successfully"
            });
        });

    },

    insertLangdata: (req, res) => {
        const body = req.body;
        insertLangdata(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err,
                    data: []
                });
            }

            if (!results) {
                return res.status(200).json({
                    success: 1,
                    message: "Not inserted",
                    data: []
                });
            }

            return res.status(200).json({
                success: 2,
                message: 'Inserted successfully',
                data: results
            });
        });
    },

    getLangData: (req, res) => {
        const body = req.body
        getLangData(body, (err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: res.err
                });
            }

            if (results.length === 0) {
                return res.status(200).json({
                    success: 2,
                    message: "Record Not Found",
                    data: []

                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },

    updatelang: (req, res) => {
        const body = req.body;
        updatelang(body, (err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (!results) {
                return res.status(200).json({
                    success: 1,
                    message: "Record Not Found"
                });
            }

            return res.status(200).json({
                success: 2,
                message: "Data Updated Successfully"
            });

        });
    },

    insertReference: (req, res) => {
        const body = req.body;
        insertReference(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err,
                    data: []
                });
            }

            if (!results) {
                return res.status(200).json({
                    success: 1,
                    message: "Not inserted",
                    data: []
                });
            }

            return res.status(200).json({
                success: 2,
                message: 'Inserted successfully',
                data: results
            });
        });
    },

    getreference: (req, res) => {
        const body = req.body
        getreference(body, (err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: res.err
                });
            }

            if (results.length === 0) {
                return res.status(200).json({
                    success: 2,
                    message: "Record Not Found",
                    data: []

                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },

    updateref: (req, res) => {
        const body = req.body;
        updateref(body, (err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (!results) {
                return res.status(200).json({
                    success: 1,
                    message: "Record Not Found"
                });
            }

            return res.status(200).json({
                success: 2,
                message: "Data Updated Successfully"
            });

        });
    },

    deleteref: (req, res) => {
        const id = req.params.id;
        deleteref(id, (err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                message: "Data Deleted Successfully"
            });
        });

    },

    insertCertification: (req, res) => {
        const body = req.body;
        insertCertification(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err,
                    data: []
                });
            }

            if (!results) {
                return res.status(200).json({
                    success: 1,
                    message: "Not inserted",
                    data: []
                });
            }

            return res.status(200).json({
                success: 2,
                message: 'Inserted successfully',
                data: results
            });
        });
    },

    getCertification: (req, res) => {
        const body = req.body
        getCertification(body, (err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: res.err
                });
            }

            if (results.length === 0) {
                return res.status(200).json({
                    success: 2,
                    message: "Record Not Found",
                    data: []

                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },

    updateCertification: (req, res) => {
        const body = req.body;
        updateCertification(body, (err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (!results) {
                return res.status(200).json({
                    success: 1,
                    message: "Record Not Found"
                });
            }

            return res.status(200).json({
                success: 2,
                message: "Data Updated Successfully"
            });

        });
    },

    deletecertification: (req, res) => {
        const id = req.params.id;
        deletecertification(id, (err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                message: "Data Deleted Successfully"
            });
        });

    },

    getAppledJob: (req, res) => {
        const body = req.body
        getAppledJob(body, (err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: res.err
                });
            }

            if (results.length === 0) {
                return res.status(200).json({
                    success: 2,
                    message: "Record Not Found",
                    data: []

                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },

    getAppledJobDetails: (req, res) => {
        const body = req.body
        getAppledJobDetails(body, (err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: res.err
                });
            }

            if (results.length === 0) {
                return res.status(200).json({
                    success: 2,
                    message: "Record Not Found",
                    dataJob: []

                });
            }

            return res.status(200).json({
                success: 1,
                dataJob: results
            });
        })
    },

    updateJob: (req, res) => {
        const body = req.body;
        updateJob(body, (err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (!results) {
                return res.status(200).json({
                    success: 1,
                    message: "Record Not Found"
                });
            }

            return res.status(200).json({
                success: 2,
                message: "Data Updated Successfully"
            });

        });
    },


    getjobdata: (req, res) => {
        getjobdata((err, results) => {
            if (err) {
                return res.status(200).json({
                    jobsuccess: 2,
                    message: err
                });
            }
            if (!results) {
                return res.status(200).json({
                    jobsuccess: 0,
                    message: "No results found"
                });
            }
            return res.status(200).json({
                jobsuccess: 1,
                jobdata: results
            });

        });
    },



    getSkilldata: (req, res) => {
        getSkilldata((err, results) => {
            if (err) {
                return res.status(200).json({
                    Skillsucces: 2,
                    message: err
                });
            }
            if (!results) {
                return res.status(200).json({
                    Skillsucces: 0,
                    message: "No results found"
                });
            }
            return res.status(200).json({
                Skillsucces: 1,
                Skilldata: results
            });
        });
    },
}

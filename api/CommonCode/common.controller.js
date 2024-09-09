const { getSaluationNamelist, getRegionBypin, getData, getBloodgrp, getEducation, getname, vacancyList, insertapplicationform,
    getPersonaldata, getCourseById, getSpecializationById, getUniversity, getBoardById, geteducation } = require('../CommonCode/common.service')
const { Application_form } = require('../../validation/validation_schema')
const nodemailer = require('nodemailer');

module.exports = {

    getSaluationName: (req, res) => {
        getSaluationNamelist((err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (!results) {
                // logger.infoLogger("No Records Found")
                return res.status(200).json({
                    success: 2,
                    message: "No Result Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },

    getRegionBypin: (req, res) => {
        const id = req.params.id;
        getRegionBypin(id, (err, results) => {
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
                data: results
            });
        });

    },

    getReligion: (req, res) => {

        getData((err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 2,
                    message: err
                });
            }

            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "No Results Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getBloodgrp: (req, res) => {
        getBloodgrp((err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (!results) {
                return res.status(200).json({
                    success: 2,
                    message: "No Results Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },

    getEducation: (req, res) => {
        getEducation((err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 2,
                    message: err
                });
            }

            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "No Results Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },

    getname: (req, res) => {
        const body = req.body
        getname(body, (err, results) => {
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
                data1: results
            });
        })
    },


    vacancyList: (req, res) => {
        const body = req.body
        vacancyList(body, (err, results) => {
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
    insertapplicationform: (req, res) => {
        const body = req.body;
        const { email, applicationSlno } = req.body;
        const body_result = Application_form.validate(body);
        if (body_result.error) {
            return res.status(200).json({
                success: 2,
                message: body_result.error.details[0].message
            });
        }
        // Insert application form data
        insertapplicationform(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: err
                });
            }
            if (!results) {
                return res.status(500).json({
                    success: 0,
                    message: "No Results Found"
                });
            }

            // Send email
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'noreply@travancoremedicity.in',
                    pass: 'sldj jsjo jrcr ycfg'
                    // user: 'amalhero1@gmail.com',
                    // pass: 'asgl rzvt rcfp keip'
                }
            });

            let mailOptions = {
                to: email,
                subject: 'Application details from Travancore Medicity',
                text: `Application Submitted Successfully. Your Registration No is: ${applicationSlno}`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    // console.error('Error sending email:', error);
                    return res.status(500).json({ message: 'Failed to send email.' });
                } else {
                    // console.log('Email sent:', info.response);
                    return res.status(200).json({
                        success: 1,
                        message: "Data Submitted Successfully and Please Check the Email!"
                    });
                }
            });
        });
    },

    getPersonaldata: (req, res) => {
        const id = req.params.id;
        getPersonaldata(id, (err, results) => {
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
                data: results
            });
        });

    },
    getCourseById: (req, res) => {
        getCourseById((err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 2,
                    message: err
                });
            }

            if (!results) {
                return res.status(200).json({
                    success: 0,
                    message: "No Results Found"
                });
            }

            return res.status(200).json({
                success: 1,
                Coursedata: results
            });
        });
    },
    getSpecializationById: (req, res) => {
        const body = req.body
        getSpecializationById(body, (err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (!results) {
                return res.status(200).json({
                    success: 2,
                    message: "No Results Found"
                });
            }

            return res.status(200).json({
                success: 1,
                Spcldata: results
            });
        })
    },
    getUniversity: (req, res) => {
        getUniversity((err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results.length == 0) {
                // logger.infoLogger("No Records Found")
                return res.status(200).json({
                    success: 0,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                Unidata: results
            });
        })
    },
    getBoardById: (req, res) => {
        getBoardById((err, results) => {
            if (err) {
                // logger.errorLogger(err)
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results.length == 0) {
                // logger.infoLogger("No Records Found")
                return res.status(200).json({
                    success: 0,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                Boarddata: results
            });
        })
    },
    geteducation: (req, res) => {
        const id = req.params.id;
        geteducation(id, (err, results) => {
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
                data: results
            });
        });

    },
}
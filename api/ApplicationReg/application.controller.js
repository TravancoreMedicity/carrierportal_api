const {
    app_registration,
    getregistration,
    getPaymentStaus,
    updatePaymentStatus,
    getApplicationStatus,
    postApplication,
    postApplicationExamMark,
    postApplicationMark,
    updateApplicationStatus,
    getCourse,
    insertIntoCourseSeelction,
    getSubmittedCourse,
    getFullApplication, courseCompleted
} = require('./application.service');

module.exports = {
    app_registration: (req, res) => {
        const body = req.body;
        app_registration(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (!results) {
                return res.status(200).json({
                    success: 1,
                    message: "no data"
                });
            }

            return res.status(200).json({
                success: 2,
                message: 'Inserted successfully'
            });
        });
    },
    getregistration: (req, res) => {
        const id = req.params.id;
        getregistration(id, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results?.length === 0) {
                return res.status(200).json({
                    success: 2,
                    message: "no data"
                });
            }

            return res.status(200).json({
                success: 1,
                message: 'success',
                data: results
            });
        });
    },
    getPaymentStaus: (req, res) => {
        const id = req.params.id;
        getPaymentStaus(id, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results?.length === 0) {
                return res.status(200).json({
                    success: 2,
                    message: "no data"
                });
            }

            return res.status(200).json({
                success: 1,
                message: 'success',
                data: results
            });
        });
    },
    updatePaymentStatus: (req, res) => {
        const body = req.body;
        updatePaymentStatus(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results?.length === 0) {
                return res.status(200).json({
                    success: 1,
                    message: "no data"
                });
            }

            return res.status(200).json({
                success: 2,
                message: 'Inserted successfully'
            });
        });
    },
    getApplicationStatus: (req, res) => {
        const id = req.params.id;
        getApplicationStatus(id, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results?.length === 0) {
                return res.status(200).json({
                    success: 1,
                    message: "no data"
                });
            }

            return res.status(200).json({
                success: 2,
                message: 'Inserted successfully',
                data: results
            });
        });
    },
    postApplication: async (req, res) => {
        const data = req.body;

        try {
            const insertpostApplicationService = await postApplication(data);
            const insertpostApplicationExamMark = await postApplicationExamMark(data);
            const insertpostApplicationMark = await postApplicationMark(data);
            Promise.all([insertpostApplicationService, insertpostApplicationExamMark, insertpostApplicationMark]).then((values) => {
                const result = values?.filter(e => e.status === 0).length === 0 ? true : false;
                if (result) {
                    updateApplicationStatus(data, (err, results) => {
                        if (err) {
                            return res.status(200).json({
                                success: 0,
                                message: err
                            });
                        }

                        if (results?.length === 0) {
                            return res.status(200).json({
                                success: 1,
                                message: "no data"
                            });
                        }

                        return res.status(200).json({
                            success: 2,
                            message: 'Inserted successfully',
                            data: results
                        });
                    });
                }
            })
        } catch (error) {
            if (error) {
                return res.status(200).json({
                    success: 0,
                    message: error
                });
            }
        }
    },
    getCourseInfo: (req, res) => {
        getCourse((err, results) => {
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
                    message: "no data",
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
    insertCourseSelection: (req, res) => {
        const body = req.body;
        insertIntoCourseSeelction(body, (err, results) => {
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
    getSubmittedCourse: (req, res) => {
        const id = req.params.id;
        getSubmittedCourse(id, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results?.length === 0) {
                return res.status(200).json({
                    success: 1,
                    message: "no data"
                });
            }

            return res.status(200).json({
                success: 2,
                message: 'Inserted successfully',
                data: results
            });
        });
    },
    getFullApplication: (req, res) => {
        const id = req.params.id;
        getFullApplication(id, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results?.length === 0) {
                return res.status(200).json({
                    success: 2,
                    message: "no data"
                });
            }

            return res.status(200).json({
                success: 1,
                message: 'success',
                data: results
            });
        });
    },

    courseCompleted: (req, res) => {
        const id = req.params.id;
        courseCompleted(id, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results?.length === 0) {
                return res.status(200).json({
                    success: 2,
                    message: "no data"
                });
            }

            return res.status(200).json({
                success: 1,
                message: 'success',
                data: results
            });
        });
    },
}
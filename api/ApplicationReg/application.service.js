const pool = require('../../config/database');

module.exports = {
    app_registration: (data, callBack) => {
        pool.query(
            `INSERT INTO candidate_registration
            (
                app_google_id,
                app_name,
                app_address,
                app_housename,
                app_street,
                app_place,
                app_district,
                app_state,
                app_post,
                app_pincode,
                app_mobile,
                app_email,
                app_gender,
                app_dob
            )
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.userId,
                data.name,
                data.address,
                data.houseName,
                data.street,
                data.place,
                data.district,
                data.state,
                data.postOffice,
                data.pincode,
                data.mobile,
                data.email,
                data.gender,
                data.age,
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getregistration: (id, callBack) => {
        pool.query(
            `SELECT 
                application_id,
                app_google_id,
                app_name,
                app_address,
                app_housename,
                app_street,
                app_place,
                app_district,
                app_state,
                app_post,
                app_pincode,
                app_mobile,
                app_email,
                app_gender,
                app_dob
            FROM candidate_registration 
            WHERE app_google_id = ?`,
            [id],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getPaymentStaus: (id, callBack) => {
        pool.query(
            `SELECT 
                application_id,
                app_google_id,
                app_payment_status,
                app_payment_refno,
                app_payment_amount
            FROM candidate_registration 
            WHERE app_google_id = ?`,
            [id],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    updatePaymentStatus: (data, callBack) => {
        pool.query(
            `UPDATE candidate_registration
                SET app_payment_status = 1,
                    app_payment_amount = 600,
                    app_payment_refno = ?
                WHERE app_google_id = ?`,
            [
                data.refeNo,
                data.id
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getApplicationStatus: (id, callBack) => {
        pool.query(
            `SELECT 
                app_status 
            FROM candidate_registration
            WHERE app_google_id = ?`,
            [id],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    postApplication: (data) => {
        return new Promise((resolve, reject) => {
            pool.query(
                `INSERT INTO application (
                    application_id,
                    app_google_id,
                    age,
                    nationality,
                    adhar,
                    guardian,
                    guar_relation,
                    father,
                    father_occupation,
                    mother,
                    mother_occupation,
                    income,
                    landline,
                    pre_address,
                    pre_district,
                    pre_state,
                    pre_pincode,
                    pre_mobile,
                    com_address,
                    com_district,
                    com_state,
                    com_pincode,
                    com_mobile,
                    board,
                    boardname,
                    yearofpass,
                    registerno,
                    app_status
                    )
                VALUES
                (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                [
                    data.applicationId,
                    data.app_google_ID,
                    data.age,
                    data.nationality,
                    data.adharNo,
                    data.guardianName,
                    data.guardianRelation,
                    data.fatherName,
                    data.fatherOccupation,
                    data.motherName,
                    data.motherOccupation,
                    data.income,
                    data.landline,
                    data.perAddress,
                    data.perDistrict,
                    data.perState,
                    data.perPincode,
                    data.perMobile,
                    data.communAddress,
                    data.communDistrict,
                    data.communState,
                    data.communPincode,
                    data.communMobile,
                    data.qulExamBoard,
                    data.qulNameOfBoard,
                    data.qulYearOfPassing,
                    data.qulRegisterNo,
                    1
                ],
                (error, results, feilds) => {
                    if (error) {
                        return reject({ status: 0, message: error });
                    }
                    return resolve({ status: 1, message: 'Inserted successfully' });
                }
            )
        })
    },
    postApplicationExamMark: (data) => {
        return new Promise((resolve, reject) => {
            pool.query(
                `INSERT INTO application_exam_mark (
                    application_id,
                    ten_institute,
                    ten_board,
                    ten_yearofpass,
                    ten_registerno,
                    ten_attempts,
                    ten_mark,
                    ten_max_mark,
                    ten_perc,
                    two_institute,
                    two_board,
                    two_yearofpass,
                    two_registerno,
                    two_attempt,
                    two_mark,
                    two_max_mark,
                    two_perc,
                    status
                )
                VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                [
                    data.applicationId,
                    data.tenth_boardInstitute,
                    data.tenth_nameOfExam,
                    data.tenth_yearOfPassing,
                    data.tenth_registerNo,
                    data.tenth_noOfAttempts,
                    data.tenth_markObtain,
                    data.tenth_maxMarks,
                    data.tenth_percentage,
                    data.plusTwo_boardInstitute,
                    data.plusTwo_nameOfExam,
                    data.plusTwo_yearOfPassing,
                    data.plusTwo_registerNo,
                    data.plusTwo_noOfAttempts,
                    data.plusTwo_markObtain,
                    data.plusTwo_maxMarks,
                    data.plusTwo_percentage,
                    1
                ],
                (error, results, feilds) => {
                    if (error) {
                        return reject({ status: 0, message: error });
                    }
                    return resolve({ status: 1, message: 'Inserted successfully' });
                }
            )
        })
    },
    postApplicationMark: (data) => {
        return new Promise((resolve, reject) => {
            pool.query(
                `INSERT INTO application_mark (
                    application_id,
                    one_physics,
                    one_ph_max,
                    one_chemistry,
                    one_che_max,
                    one_biology,
                    one_bio_max,
                    one_english,
                    one_eng_max,
                    one_total,
                    one_total_max,
                    two_physics,
                    two_phy_max,
                    two_chemoistry,
                    two_chem_max,
                    two_biology,
                    two_bio_max,
                    two_english,
                    two_eng_max,
                    two_toal,
                    two_total_max,
                    physic_per,
                    chemistry_per,
                    biology_per,
                    english_per,
                    total_per,
                    status
                    )
                VALUES
                    (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                [
                    data.applicationId,
                    data.plusOnePhysics,
                    data.plusOneMaxPhysics,
                    data.plusOneChemistry,
                    data.plusOneMaxChemistry,
                    data.plusOneBiology,
                    data.plusOneMaxBiology,
                    data.plusOneEnglish,
                    data.plusOneMaxEnglish,
                    data.plusOneTotal,
                    data.plusOneMaxTotal,
                    data.plusTwoPhysics,
                    data.plusTwoMaxPhysics,
                    data.plusTwoChemistry,
                    data.plusTwoMaxChemistry,
                    data.plusTwoBiology,
                    data.plusTwoMaxBiology,
                    data.plusTwoEnglish,
                    data.plusTwoMaxEnglish,
                    data.plusTwoTotal,
                    data.plusTwoMaxTotal,
                    data.physicsPercentage,
                    data.chemistryPercentage,
                    data.biologyPercentage,
                    data.englishPercentage,
                    data.totalPercentage,
                    1
                ],
                (error, results, feilds) => {
                    if (error) {
                        return reject({ status: 0, message: error });
                    }
                    return resolve({ status: 1, message: 'Inserted successfully' });
                }
            )
        })
    },
    updateApplicationStatus: (data, callBack) => {
        pool.query(
            `UPDATE candidate_registration
            SET app_status = 1
            WHERE application_id = ?`,
            [
                data.applicationId
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getCourse: (callBack) => {
        pool.query(
            `SELECT 
                cour_slno,
                cource_name
            FROM application_cource`,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    insertIntoCourseSeelction: (data, callBack) => {
        pool.query(
            `insert into 
            application_selection 
                (application_id,cour1,cour2,cour3) 
            values 
                (?,?,?,?)`,
            [
                data.applicationId,
                data.cour1,
                data.cour2,
                data.cour3,
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getSubmittedCourse: (id, callBack) => {
        pool.query(
            `SELECT  
                application_id,
                cour1,
                cour2,
                cour3
            FROM application_selection 
            WHERE application_id = ?`,
            [id],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getFullApplication: (id, callBack) => {
        pool.query(
            `SELECT 
            C.application_id,
            C.app_google_id,
            C.app_name,
            C.app_email,
            C.app_dob,
            C.app_payment_refno,
            C.app_payment_amount,
            A.age,
            A.nationality,
            A.adhar,
            A.guardian,
            A.guar_relation,
            A.father,
            A.father_occupation,
            A.mother,
            A.mother_occupation,
            A.income,
            A.landline,
            A.pre_address,
            A.pre_district,
            A.pre_state,
            A.pre_pincode,
            A.pre_mobile,
            A.com_address,
            A.com_district,
            A.com_state,
            A.com_pincode,
            A.com_mobile,
            A.board,
            A.boardname,
            A.yearofpass,
            A.registerno,
            M.ten_institute,
            M.ten_board,
            M.ten_yearofpass,
            M.ten_registerno,
            M.ten_attempts,
            M.ten_mark,
            M.ten_max_mark,
            M.ten_perc,
            M.two_institute,
            M.two_board,
            M.two_yearofpass,
            M.two_registerno,
            M.two_attempt,
            M.two_mark,
            M.two_max_mark,
            M.two_perc,
            R.one_physics,
            R.one_ph_max,
            R.one_chemistry,
            R.one_che_max,
            R.one_biology,
            R.one_bio_max,
            R.one_english,
            R.one_eng_max,
            R.one_total,
            R.one_total_max,
            R.two_physics,
            R.two_phy_max,
            R.two_chemoistry,
            R.two_chem_max,
            R.two_biology,
            R.two_bio_max,
            R.two_english,
            R.two_eng_max,
            R.two_toal,
            R.two_total_max,
            R.physic_per,
            R.chemistry_per,
            R.biology_per,
            R.english_per,
            R.total_per,
            c1.cource_name AS cour1,
            c2.cource_name AS cour2,
            c3.cource_name AS cour3,
            c4.cource_name AS cour4,
            c5.cource_name AS cour5,
            c6.cource_name AS cour6,
            c7.cource_name AS cour7,
            c8.cource_name AS cour8
        FROM candidate_registration C
        LEFT JOIN application A ON C.application_id = A.application_id
        LEFT JOIN application_exam_mark M ON M.application_id = C.application_id 
        LEFT JOIN application_mark R ON R.application_id =  C.application_id
        LEFT JOIN application_selection S ON S.application_id = C.app_google_id
        LEFT JOIN application_selection P ON P.application_id = C.app_google_id
        LEFT JOIN application_cource c1 ON P.cour1 = c1.cour_slno
        LEFT JOIN application_cource c2 ON P.cour2 = c2.cour_slno
        LEFT JOIN application_cource c3 ON P.cour3 = c3.cour_slno
        LEFT JOIN application_cource c4 ON P.cour4 = c4.cour_slno
        LEFT JOIN application_cource c5 ON P.cour5 = c5.cour_slno
        LEFT JOIN application_cource c6 ON P.cour6 = c6.cour_slno
        LEFT JOIN application_cource c7 ON P.cour7 = c7.cour_slno
        LEFT JOIN application_cource c8 ON P.cour8 = c8.cour_slno
        WHERE C.app_status = 1 AND C.app_google_id = ?`,
            [id],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
}
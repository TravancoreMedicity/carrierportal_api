const pool = require('../../config/database');

module.exports = {
    getSaluationNamelist: (callBack) => {
        pool.query(
            `SELECT sa_code,sal_name FROM hrm_salutation WHERE sal_status = '1'`,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results);
            }
        )
    },

    getRegionBypin: (id, callBack) => {
        pool.query(
            `SELECT reg_slno,reg_name,reg_pincode,reg_dist_slno FROM hrm_region where reg_pincode=? `,
            [
                id
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    getData: (callBack) => {
        pool.query(
            `SELECT 
                relg_slno,
                relg_name,
                relg_status,
                if(relg_status = 1 ,'Yes','No')status
            FROM hrm_religion`,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    getBloodgrp: (callBack) => {
        pool.query(
            `SELECT group_slno,group_name FROM bloodgroup`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    getEducation: (callBack) => {
        pool.query(
            `SELECT edu_slno, edu_desc FROM hrm_mast_education`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    getname: (data, callBack) => {

        pool.query(
            `SELECT
            edu_desc
              FROM hrm_mast_education
           WHERE edu_slno= ? `,
            [
                data.education
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    vacancyList: (data, callBack) => {

        pool.query(
            `SELECT
             manpower_required_no,
             desg_id,
             desg_name,
             required_date,
             experiencefrom,
             experienceto,
             annouced_date,
             manpower_Request_slno
              FROM hrm_manpower_request
            LEFT JOIN designation ON hrm_manpower_request.desg_id = designation.desg_slno
           WHERE JSON_CONTAINS(qualification, '?') and announcement_status=1 `,
            [
                data.education
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },


    insertapplicationform: (data, callBack) => {

        pool.query(
            `INSERT INTO hrm_application_form (
                salutation,
                first_name,
                last_name,
                middle_name,
                email,
                mobile_num,
                region,
                religion,
                dob,
                opportunity_status,
                vaccination_status,
                helath_status,
                health_details,
                hear_this_job,
                criminal_status,
                criminal_details,
                legal_obligation_status,
                legal_obligation_details,
                relatives_friends_status,
                relatives_friends_email,
                relatives_friends_name,
                relatives_friends_empNo,
                agree_status,
                agree_marketing_status,
                recruitment_status,
                recruitment_unit,
                application_no,
                Experience_details,
                Education_details,
                Job_applied,
                address1,
                address2,
                bloodgrp,
                gender,
                About
                )
                VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.value, data.name, data.lname, data.mname, data.email, data.mobile, data.Region, data.Religion, data.dob, data.opportunity_status,
                data.vaccination_status, data.helath_status, data.Health, data.job, data.criminal_status, data.criminal, data.legal_obligation_status,
                data.obligation, data.relatives_friends_status, data.empemail, data.empname, data.empno,
                data.agree_status, data.agree_marketing_status, data.recruitment_sts,
                data.recruitment, data.applicationSlno, JSON.stringify(data.expdata), JSON.stringify(data.edudata), JSON.stringify(data.selectedVacancies),
                data.addressPermnt1, data.addressPermnt2, data.bloodgrp, data.gender, data.About
            ],
            (error, results, feilds) => {

                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    getPersonaldata: (id, callBack) => {
        pool.query(
            `SELECT application_slno,
             salutation,
             first_name,
             last_name,
             middle_name,
             email,
             mobile_num,
             region,
             religion,
             dob,
             application_no,
             Education_details,
             Experience_details,
             Job_applied,
             address1,
             address2,
             bloodgrp,
             gender,
             About
             FROM hrm_application_form where application_no=? `,
            [
                id
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getCourseById: (callBack) => {
        pool.query(
            `SELECT * FROM hrm_mast_course`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    getSpecializationById: (data, callBack) => {
        pool.query(
            // `SELECT spec_slno,spec_desc FROM hrm_mast_specializtion  where cour_slno IN (?)`,
            ` SELECT * FROM hrm_mast_specializtion`,
            [
                data
            ],
            (error, results, feilds) => {

                if (error) {
                    return callBack(error);
                }

                return callBack(null, results);

            }
        )
    },
    getUniversity: (callBack) => {
        pool.query(
            `SELECT 
            unver_slno,
            unver_name
            FROM  hrm_university
            where unver_status=1`,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getBoardById: (callBack) => {
        pool.query(
            `SELECT 
            board_slno,
            board_name,
            education_slno
        FROM  hrm_board `,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    geteducation: (id, callBack) => {
        pool.query(
            `SELECT
    jt.id,
    jt.gpa,
    jt.board,
    jt.course,
    jt.AvgGrade,
    jt.Graduated,
    jt.Regionedu,
    jt.education,
    jt.eduenddate,
    jt.schoolname,
    jt.university,
    jt.DateAcquired,
    jt.edustartdate,
    jt.ProjectedDate,
    jt.specialization,
    e.edu_desc,
      s.spec_desc,
      u.unver_name,
      b.board_name,
      m.cour_desc
FROM
    hrm_application_form af
    CROSS JOIN JSON_TABLE(
        af.Education_details,
        '$[*]' COLUMNS (
            id INT PATH '$.id',
            gpa VARCHAR(10) PATH '$.gpa',
            board INT PATH '$.board',
            course INT PATH '$.course',
            AvgGrade VARCHAR(10) PATH '$.AvgGrade',
            Graduated BOOLEAN PATH '$.Graduated',
            Regionedu INT PATH '$.Regionedu',
            education INT PATH '$.education',
            eduenddate DATE PATH '$.eduenddate',
            schoolname VARCHAR(255) PATH '$.schoolname',
            university INT PATH '$.university',
            DateAcquired DATE PATH '$.DateAcquired',
            edustartdate DATE PATH '$.edustartdate',
            ProjectedDate DATE PATH '$.ProjectedDate',
            specialization INT PATH '$.specialization'
        )
    ) AS jt
    LEFT JOIN hrm_mast_education e
    ON jt.education = e.edu_slno
     LEFT JOIN hrm_mast_specializtion s
    ON jt.specialization = s.spec_slno
	LEFT JOIN hrm_university u
    ON jt.university = u.unver_slno
    LEFT JOIN hrm_board b
    ON jt.board = b.board_slno
    LEFT JOIN hrm_mast_course m
    ON jt.course = m.cour_slno
    WHERE
    af.application_no = ?;`,
            [
                id
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
}
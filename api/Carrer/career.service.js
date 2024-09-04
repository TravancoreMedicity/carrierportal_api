const pool = require('../../config/database');

module.exports = {
    getcarrerdata: (callBack) => {
        pool.query(
            `SELECT  
            hrm_manpower_request.dept_id,
            desg_id,
            dept_type,
            permanent_status,
            hrm_manpower_request.contract_status,
            apprentice_status,
            trainee_status,
            manpower_required_no,
            required_date,
            new_position_status,
            addition_status,
            replacement_status,
            replacement_emid,
            salaryfrom,
            salaryto,
            ed_approval_status,
            Hod_approval_status,
            Hr_approval_status,
            dept_name,
            desg_name,
            createdate,
            em_name,
            qualification,
            annouced_date,
            experiencefrom,
            experienceto,
            manpower_Request_slno,
            Discription,
            Clinical_status,
            Non_Clinical_status,
            announcement_status
              from  hrm_manpower_request
              LEFT JOIN hrm_department ON hrm_manpower_request.dept_id = hrm_department.dept_id
              LEFT JOIN designation ON hrm_manpower_request.desg_id = designation.desg_slno
              LEFT JOIN hrm_emp_master ON hrm_manpower_request.replacement_emid = hrm_emp_master.em_no
                 where required_date >=curdate();
               `,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    insertskilldata: (data, callBack) => {
        pool.query(
            `insert into 
            career_skills 
                (emp_id,skills_desc) 
            values 
                (?,?)`,
            [
                data.ApplicationId,
                data.skills,

            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getSkillData: (data, callBack) => {
        pool.query(
            `SELECT
            skill_slNo,
            emp_id,
            skills_desc
              FROM career_skills
           WHERE emp_id= ? `,
            [
                data.ApplicationId
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    updateSkills: (data, callBack) => {
        pool.query(
            `UPDATE 
            career_skills 
            set skills_desc=?
            where  skill_slNo=? and emp_id=?;`,
            [
                data.skills,
                data.slno,
                data.ApplicationId
            ],

            (error, results, feilds) => {
                if (error) {

                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },


    deleteskills: (id, callBack) => {
        pool.query(
            `delete from career_skills where skill_slNo =?`,
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

    insertHobbiesdata: (data, callBack) => {
        pool.query(
            `insert into 
            career_hobbies 
                (em_id,hobbies) 
            values 
                (?,?)`,
            [
                data.ApplicationId,
                data.Hobbies,

            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    getHobbiesData: (data, callBack) => {
        pool.query(
            `SELECT
            hobbies_slno,
            em_id,
            hobbies
              FROM career_hobbies
           WHERE em_id= ? `,
            [
                data.ApplicationId
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    updateHobbies: (data, callBack) => {
        pool.query(
            `UPDATE 
            career_hobbies 
            set hobbies=?
            where  hobbies_slno=? and em_id=?;`,
            [
                data.Hobbies,
                data.slno,
                data.ApplicationId
            ],

            (error, results, feilds) => {
                if (error) {

                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },


    deleteHobbies: (id, callBack) => {
        pool.query(
            `delete from career_hobbies where hobbies_slno =?`,
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

    insertLangdata: (data, callBack) => {

        pool.query(
            `insert into 
            career_langauge 
            ( emp_id,
             malayalam_Poor,
            malayalam_Exe,
            malayalam_Nat,
            malayalam_pro,
            malayalam_Beg,
            english_Poor,
            english_Exe,
            english_Nat,
            english_pro,
            english_Beg,
            hindi_Poor,
            hindi_Exe,
            hindi_Nat,
            hindi_pro,
            hindi_Beg,
            tamil_Poor,
            tamil_Exe,
            tamil_Nat,
            tamil_pro,
            tamil_Beg,
            arabic_Poor,
            arabic_Exe,
            arabic_Nat,
            arabic_Pro,
            arabic_Beg
            )
            values 
                (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.applicationId,
                data.malayalam_Poor,
                data.malayalam_Exe,
                data.malayalam_Nat,
                data.malayalam_Pro,
                data.malayalam_Beg,
                data.english_Poor,
                data.english_Exe,
                data.english_Nat,
                data.english_Pro,
                data.english_Beg,
                data.hindi_Poor,
                data.hindi_Exe,
                data.hindi_Nat,
                data.hindi_Pro,
                data.hindi_Beg,
                data.tamil_Poor,
                data.tamil_Exe,
                data.tamil_Nat,
                data.tamil_Pro,
                data.tamil_Beg,
                data.arabic_Poor,
                data.arabic_Exe,
                data.arabic_Nat,
                data.arabic_Pro,
                data.arabic_Beg

            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },


    getLangData: (data, callBack) => {
        pool.query(
            `SELECT  * FROM career_langauge
           WHERE emp_id= ? `,
            [
                data.ApplicationId
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },


    updatelang: (data, callBack) => {
        pool.query(
            `UPDATE 
            career_langauge 
            set
             malayalam_Poor=?,
            malayalam_Exe=?,
            malayalam_Nat=?,
            malayalam_pro=?,
            malayalam_Beg=?,
            english_Poor=?,
            english_Exe=?,
            english_Nat=?,
            english_pro=?,
            english_Beg=?,
            hindi_Poor=?,
            hindi_Exe=?,
            hindi_Nat=?,
            hindi_pro=?,
            hindi_Beg=?,
            tamil_Poor=?,
            tamil_Exe=?,
            tamil_Nat=?,
            tamil_pro=?,
            tamil_Beg=?,
            arabic_Poor=?,
            arabic_Exe=?,
            arabic_Nat=?,
            arabic_Pro=?,
            arabic_Beg=?
            where   emp_id=?;`,
            [
                data.malayalam_Poor,
                data.malayalam_Exe,
                data.malayalam_Nat,
                data.malayalam_Pro,
                data.malayalam_Beg,
                data.english_Poor,
                data.english_Exe,
                data.english_Nat,
                data.english_Pro,
                data.english_Beg,
                data.hindi_Poor,
                data.hindi_Exe,
                data.hindi_Nat,
                data.hindi_Pro,
                data.hindi_Beg,
                data.tamil_Poor,
                data.tamil_Exe,
                data.tamil_Nat,
                data.tamil_Pro,
                data.tamil_Beg,
                data.arabic_Poor,
                data.arabic_Exe,
                data.arabic_Nat,
                data.arabic_Pro,
                data.arabic_Beg,
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

    insertReference: (data, callBack) => {
        pool.query(
            `insert into 
            career_reference 
            (
            name, designation, number, mail_id, emid
            )
            values 
                (?,?,?,?,?)`,
            [
                data.name,
                data.Designation,
                data.number,
                data.mail,
                data.ApplicationId,
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    getreference: (data, callBack) => {
        pool.query(
            `SELECT  * FROM career_reference
           WHERE emid= ? `,
            [
                data.ApplicationId
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    updateref: (data, callBack) => {
        pool.query(
            `UPDATE 
            career_reference 
            set
            name=?,
            designation=?,
            number=?,
            mail_id=?
            where
            emid=? and reference_slno=?;`,
            [
                data.name,
                data.Designation,
                data.number,
                data.mail,
                data.ApplicationId,
                data.slno,
            ],

            (error, results, feilds) => {
                if (error) {

                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    deleteref: (id, callBack) => {

        pool.query(
            `delete from career_reference where reference_slno =?`,
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

    insertCertification: (data, callBack) => {

        pool.query(
            `insert into 
            career_certifications 
            (
           certfication_name,
            courseName,
             emid
            )
            values 
                (?,?,?)`,
            [

                data.certification,
                data.course,
                data.ApplicationId,
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    getCertification: (data, callBack) => {
        pool.query(
            `SELECT  * FROM career_certifications
           WHERE emid= ? `,
            [
                data.ApplicationId
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    updateCertification: (data, callBack) => {
        pool.query(
            `UPDATE 
            career_certifications 
            set
            certfication_name=?,
            courseName=?
            where
            emid=? and crt_slno=?;`,
            [
                data.certification,
                data.course,
                data.ApplicationId,
                data.slno,
            ],

            (error, results, feilds) => {
                if (error) {

                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    deletecertification: (id, callBack) => {

        pool.query(
            `delete from career_certifications where crt_slno =?`,
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
    getAppledJob: (data, callBack) => {


        pool.query(
            `  SELECT
           desg_name,
           desg_slno,
           hrm_application_form.create_date,
           selected_status
           FROM hrm_application_form
           LEFT JOIN designation on JSON_CONTAINS(hrm_application_form.Job_applied,cast(designation.desg_slno as json),'$')
            LEFT JOIN hrm_applicationform_status ON hrm_application_form.application_no = hrm_applicationform_status.application_no
           WHERE hrm_application_form.application_no = ? `,
            [
                data.ApplicationId
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    getAppledJobDetails: (data, callBack) => {
        pool.query(
            ` SELECT
            manpower_Request_slno,
             desg_id,
              required_date,
             Discription,
             experiencefrom,
             experienceto
             FROM hrm_application_form
             LEFT JOIN hrm_manpower_request 
             ON JSON_CONTAINS(hrm_application_form.Job_applied, CAST(hrm_manpower_request.desg_id AS JSON), '$')
             WHERE hrm_application_form.application_no = ? `,
            [
                data.ApplicationId
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },


    updateJob: (data, callBack) => {
        pool.query(
            `UPDATE hrm_application_form
            SET Job_applied = JSON_ARRAY_APPEND(Job_applied, '$', ?)
            WHERE application_slno = ?;`,
            [
                data.desgid,
                data.application_slno
            ],

            (error, results, feilds) => {
                if (error) {

                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getjobdata: (callBack) => {
        pool.query(
            `
            SELECT
           ROW_NUMBER() OVER () as slno, 
           jobdiscription_skillsSlno,
            dept_id,
            desg_id,
            job_desc
            FROM jobdiscription_skills
        
               `,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    getSkilldata: (callBack) => {
        pool.query(
            `
            SELECT      
            skill,
            desig_id,
            skill_name
            FROM hrm_jobskills
            LEFT JOIN hrm_skills
             ON hrm_jobskills.skill = hrm_skills.skills_slno
        
               `,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
}
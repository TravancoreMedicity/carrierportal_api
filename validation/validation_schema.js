const Joi = require("joi");

const Application_form = Joi.object({
    value: Joi.number().min(1).required()
        .messages({
            'number.min': '  Salutataion Not selected',

        }),
    name: Joi.string().trim().uppercase().min(3).max(45).required()
        .messages({
            'string.empty': 'Name is Required',
            'string.max': 'Name length must be less than or equal to 45 characters long',
            'string.min': 'Name length must be at least 3 characters long',
        }),

    lname: Joi.string().required()
        .messages({
            'string.empty': 'Last Name is required',
        }),
    email: Joi.string().email().min(1).max(45).message({
        'string.empty': 'Email Address Name is required',
    }),
    mobile: Joi.number().min(15).required()
        .messages({
            'number.min': ' Mobile Number Not selected',

        }),
    Region: Joi.number().min(0).required()
        .messages({
            'number.min': ' Region  Not selected',

        }),
    Religion: Joi.number().min(0).required()
        .messages({
            'number.min': ' Religion  Not selected',

        }),
    dob: Joi.date().required(),
    // job: Joi.string().optional(),
    expdata: Joi.optional(),
    edudata: Joi.optional(),
    mname: Joi.optional(),
    permnt_pin: Joi.optional(),
    criminal: Joi.optional(),
    obligation: Joi.optional(),
    recruitment: Joi.optional(),
    Health: Joi.optional(),
    empemail: Joi.optional(),
    empname: Joi.optional(),
    empno: Joi.optional(),
    opportunity_status: Joi.optional(),
    vaccination_status: Joi.optional(),
    helath_status: Joi.optional(),
    criminal_status: Joi.optional(),
    legal_obligation_status: Joi.optional(),
    relatives_friends_status: Joi.optional(),
    recruitment_sts: Joi.optional(),
    agree_status: Joi.optional(),
    agree_marketing_status: Joi.optional(),
    applicationSlno: Joi.optional(),
    selectedVacancies: Joi.optional(),
    addressPermnt1: Joi.optional(),
    addressPermnt2: Joi.optional(),
    About: Joi.optional(),
    gender: Joi.number().min(1).required()
        .messages({
            'number.min': '  Gender Not selected',
        }),
    bloodgrp: Joi.number().min(1).required()
        .messages({
            'number.min': '  Blood Group Not selected',
        }),

})


module.exports = {
    Application_form,
}
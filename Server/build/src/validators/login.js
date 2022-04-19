"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreate = void 0;
const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');
exports.validateCreate = [
    check('user')
        .exists()
        .not()
        .isEmpty(),
    check('password')
        .exists()
        .not()
        .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next());
    }
];
module.exports = { validateCreate: exports.validateCreate };

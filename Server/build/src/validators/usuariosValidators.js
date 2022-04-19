"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateListUsuarios = void 0;
const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');
exports.validateListUsuarios = [
    check('id')
        .exists()
        .toInt()
        .not()
        .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next());
    }
];
module.exports = { validateListUsuarios: exports.validateListUsuarios };

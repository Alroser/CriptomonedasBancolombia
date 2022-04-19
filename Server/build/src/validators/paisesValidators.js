"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreatePaises = exports.validateListPaises = void 0;
const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');
exports.validateListPaises = [
    check('id')
        .exists()
        .toInt()
        .not()
        .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next());
    }
];
exports.validateCreatePaises = [
    check('id_pais')
        .exists()
        .not()
        .isEmpty()
        .isNumeric(),
    check('nombre_pais')
        .exists()
        .not()
        .isEmpty()
        .isString(),
    check('id_moneda')
        .exists()
        .not()
        .isEmpty()
        .isNumeric(),
    (req, res, next) => {
        validateResult(req, res, next());
    }
];
module.exports = { validateListPaises: exports.validateListPaises, validateCreatePaises: exports.validateCreatePaises };

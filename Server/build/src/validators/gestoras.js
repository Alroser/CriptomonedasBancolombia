"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreateGestora = exports.validateList = void 0;
const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');
exports.validateList = [
    check('id')
        .exists()
        .toInt()
        .not()
        .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next());
    }
];
exports.validateCreateGestora = [
    check('id_gestora')
        .exists()
        .not()
        .isEmpty()
        .isNumeric(),
    check('nombre_gestora')
        .exists()
        .not()
        .isEmpty(),
    check('id_moneda')
        .exists()
        .not()
        .isEmpty()
        .isNumeric(),
    check('id_pais')
        .exists()
        .not()
        .isEmpty()
        .isNumeric(),
    (req, res, next) => {
        validateResult(req, res, next());
    }
];
module.exports = { validateList: exports.validateList, validateCreateGestora: exports.validateCreateGestora, };

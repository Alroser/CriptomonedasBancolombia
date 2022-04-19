import { NextFunction } from 'express';
const { check } = require ('express-validator');
const { validateResult } = require ('../helpers/validateHelper');

export const validateList = [

    check('id')
    .exists()
    .toInt()
    .not()
    .isEmpty(),

    (req: Request,res: Response ,next: NextFunction) => {
       
        validateResult(req,res,next());       
    }    
]



export const validateCreateGestora = [

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

    (req: Request,res: Response ,next: NextFunction) => {
       
        validateResult(req,res,next());       
    }    
]

module.exports = {validateList,validateCreateGestora,}
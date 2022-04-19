import { NextFunction } from 'express';
const { check } = require ('express-validator');
const { validateResult } = require ('../helpers/validateHelper');


export const validateListPaises = [

    check('id')
    .exists()
    .toInt()
    .not()
    .isEmpty(),
    
    (req: Request,res: Response ,next: NextFunction) => {
       
        validateResult(req,res,next());       
    }    
]
export const validateCreatePaises = [

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

    (req: Request,res: Response ,next: NextFunction) => {
       
        validateResult(req,res,next());       
    }    
]

module.exports = {validateListPaises,validateCreatePaises}
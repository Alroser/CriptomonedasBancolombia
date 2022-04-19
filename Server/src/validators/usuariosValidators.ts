import { NextFunction } from 'express';
const { check } = require ('express-validator');
const { validateResult } = require ('../helpers/validateHelper');

export const validateListUsuarios = [

    check('id')
    .exists()
    .toInt()
    .not()
    .isEmpty(),

    (req: Request,res: Response ,next: NextFunction) => {
       
        validateResult(req,res,next());       
    }    
]

module.exports = {validateListUsuarios}
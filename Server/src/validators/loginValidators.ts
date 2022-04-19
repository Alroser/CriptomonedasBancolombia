import { NextFunction } from 'express';
const { check } = require ('express-validator');
const { validateResult } = require ('../helpers/validateHelper');

export const validateCreate = [
    check('user')
        .exists()
        .not()
        .isEmpty(),
    check('password')
        .exists()
        .not()
        .isEmpty(),
    
        (req: Request,res: Response ,next: NextFunction) => {
            validateResult(req,res,next());       
        }
        
       
]

module.exports = {validateCreate}

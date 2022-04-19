import {Request , Response} from 'express';
import { connect } from '../database';
import jwt from 'jsonwebtoken';


class LoginController {

    public async profile (req: Request, res : Response) {
        try {
            console.log(req.params);
            const {id} = req.params;
            const coon = await connect();      
            const user = await coon.query('select * from login where user = ?' , [id]);
            return res.json(user[0]);  
        } catch (error) {
            return res.send('Ocurrio un error')
        }        
    }

    public async sigup (req: Request, res : Response) {
        
                        
                const coon = await connect(); 
                await  coon.query('INSERT INTO login set ?',[req.body]);
                //return res.json(req.body);
                const savedUser =  ([req.body]);
                const token: string  = jwt.sign({savedUser}, process.env.TESTING || 'test');
                res.header('auth-token',token).json(savedUser);
        
            
       
        
        
    }

    public async sigin (req: Request, res : Response) {
        
     try {
        const coon = await connect(); 
        await  coon.query('select count(*) from login where user = ?',[req.body]);
        const savedUser =  ([req.body]);
        const token: string  = jwt.sign({savedUser}, process.env.TESTING || 'test');
        res.header('auth-token',token).json(savedUser);
     } catch (error) {
        console.log(error);   
     }  
    }

}


const loginController = new LoginController();
export default loginController;



import { TokenValidation } from './../libs/verifyToken';
import { Router } from 'express';
import loginController  from '../controllers/loginController';
import {validateCreate} from '../validators/loginValidators';

class LoginRoutes {

    public router : Router = Router();

    constructor() {
        this.config();
    }

    config() : void {
        this.router.get('/profile/:id',loginController.profile);
        this.router.post('/sigin', loginController.sigin);
        this.router.post('/sigup', validateCreate , loginController.sigup);
    }

}

const loginRoutes = new LoginRoutes();
export default loginRoutes.router;

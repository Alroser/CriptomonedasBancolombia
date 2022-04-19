import { Router } from 'express';
import gestorasController from '../controllers/gestorasController';
import { TokenValidation } from './../libs/verifyToken';
import {validateList,validateCreateGestora} from '../validators/gestorasValidators';

class GestorasRoutes {

    public router : Router = Router();

    constructor() {
        this.config();
    }

    config() : void {
        this.router.get('/listar', gestorasController.listGestoras);
        this.router.get('/list-moneda-gestora/:id', validateList, gestorasController.listMonedasGestoras);
        this.router.get('/list-moneda-gestora-pais-usuario/:id',validateList , gestorasController.listMonedasGestorasPais);
        this.router.post('/crear-gestora', validateCreateGestora, gestorasController.createGestora);

    }

}

const gestorasRoutes = new GestorasRoutes();
export default gestorasRoutes.router; 
import { TokenValidation } from './../libs/verifyToken';
import { Router } from 'express';
import paisesController  from '../controllers/paisesController';

import {validateListPaises,validateCreatePaises} from '../validators/paisesValidators';


class PaisesRoutes {

    public router : Router = Router();

    constructor() {
        this.config();
    }

    config() : void {
        this.router.get('/listar', paisesController.list);//No
        this.router.get('/monedas',  paisesController.listMonedas);//No
        this.router.get('/id/:id', validateListPaises,paisesController.list_id);
        this.router.get('/list-moneda-pais/:id', validateListPaises, paisesController.list_moneda_pais);
        this.router.get('/list-moneda-pais-usuario/:id', validateListPaises, paisesController.list_moneda_pais_user);
        this.router.post('/crear-pais',validateCreatePaises,paisesController.create);
        this.router.delete('/eliminar-pais/:id',validateListPaises, paisesController.delete);
        this.router.put('/actualizar/:id',  validateCreatePaises,paisesController.update);
    }

}

const paisesRoutes = new PaisesRoutes();
export default paisesRoutes.router;

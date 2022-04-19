import {Request , Response} from 'express';
import { connect } from '../database';
import jwt from 'jsonwebtoken';

class GestorasController {

    public async listGestoras (req: Request, res : Response) {
        const coon = await connect();      
        const gestoras = await coon.query('select id_gestora, nombre_gestora from gestoras group by id_gestora, nombre_gestora');
        return res.json(gestoras[0]);

    } 

    public async listMonedasGestoras (req: Request, res : Response) {
        try {
            console.log(req.params);
            const {id} = req.params;
            const coon = await connect();      
            const resul = await coon.query('select nombre_moneda,simbolo_moneda,valor_moneda from gestoras inner join monedas on gestoras.id_moneda = monedas.id_moneda where id_gestora=?' , [id]);
            return res.json(resul[0]); 
        } catch (error) {
            console.log(error)
        }
      

    }
    
    public async createGestora (req: Request, res : Response) {
        try {
            console.log(req.body);
            const coon = await connect(); 
            const resul = await coon.query('INSERT INTO gestoras set ?',[req.body]);
            return res.send("Gestora creada con exito");
        } catch (error) {
            console.log(error)
        }
        
    }

    public async listMonedasGestorasPais (req: Request, res : Response) { 
        try {
            console.log(req.params);
            const {id} = req.params;
            const coon = await connect();      
            var resul = await coon.query('select gestoras.id_gestora, gestoras.nombre_gestora, monedas.id_moneda, monedas.nombre_moneda, monedas.simbolo_moneda, monedas.valor_moneda from usuarios inner join paises on usuarios.id_pais = paises.id_pais left join monedas on paises.id_moneda = monedas.id_moneda inner join gestoras on paises.id_moneda = gestoras.id_moneda and paises.id_pais = gestoras.id_pais where usuarios.id_usuario = ?' , [id]);
            res.json(resul[0]);   
        } catch (error) {
            console.log(error)
        }
    }
}
const gestorasController = new GestorasController();
export default gestorasController;


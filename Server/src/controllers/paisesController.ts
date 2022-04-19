import {Request , Response} from 'express';
import { connect } from '../database';
import jwt from 'jsonwebtoken';

class PaisesController {


    public async list (req: Request, res : Response) {
        const coon = await connect();      
        const user = await coon.query('select id_pais, nombre_pais from paises group by id_pais, nombre_pais');
        return res.json(user[0]);

    } 

    public async listMonedas (req: Request, res : Response) {
        const coon = await connect();      
        const user = await coon.query('select id_moneda,nombre_moneda,simbolo_moneda,valor_moneda from monedas');
        return res.json(user[0]);

    } 

    public async list_id (req: Request, res : Response) {
       try{
            console.log(req.params);
            const {id} = req.params;
            const coon = await connect();      
            const user = await coon.query('select id_pais, nombre_pais from paises where id_pais = ? group by id_pais, nombre_pais' , [id]);
            return res.json(user[0]); 
       } catch (error){
           console.error(error)
       }
    }

    public async list_moneda_pais (req: Request, res : Response) {
        try{
            console.log(req.params);
            const {id} = req.params;
            const coon = await connect();      
            const resul = await coon.query('select nombre_moneda,simbolo_moneda,valor_moneda from paises inner join monedas on paises.id_moneda = monedas.id_moneda where id_pais = ?' , [id]);
            return res.json(resul[0]);
        } catch(error){
            console.error(error);
        }
    }

    public async list_moneda_pais_user (req: Request, res : Response) {
        try{
            console.log(req.params);
            const {id} = req.params;
            const coon = await connect();      
            const resul = await coon.query('select monedas.id_moneda, monedas.nombre_moneda, monedas.simbolo_moneda, monedas.valor_moneda from usuarios inner join paises on usuarios.id_pais = paises.id_pais left join monedas on paises.id_moneda = monedas.id_moneda where usuarios.id_usuario = ?' , [id]);
            return res.json(resul[0]); 
        }catch(e){
            console.log(e)
            res.sendStatus(400)
            res.statusMessage='Error en el parametro'
        }
    }

    public async create (req: Request, res : Response) {
        try{
            console.log(req.body);
            const coon = await connect(); 
            await  coon.query('INSERT INTO paises set ?',[req.body]);
            return res.json(req.body);
        }
        catch(e){
            console.error(e);
        }
    }

    public async delete (req: Request, res : Response) {
       try{
            console.log(req.params);
            const {id} = req.params;
            const coon = await connect(); 
            await  coon.query('DELETE FROM paises WHERE  id_pais = ?',[id]);
            return res.json({text: 'Pais ' + id + ' eliminado correctamente'});
       }catch(e){
           console.log(e);
       }
    }

    public async update (req: Request, res : Response) {
        try{
            console.log(req.body);
            const {id} = req.params;
            const coon = await connect(); 
            await  coon.query('update paises set ? where id_pais = ?',[req.body,id]);
            return res.json({text: 'Pais ' + id + ' actualizado correctamente'});  
        }catch(e){
            console.log(e);
        }
    }
}


 const paisesController = new PaisesController();
 export default paisesController;
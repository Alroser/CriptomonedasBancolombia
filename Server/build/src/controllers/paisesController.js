"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class PaisesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const coon = yield (0, database_1.connect)();
            const user = yield coon.query('select id_pais, nombre_pais from paises group by id_pais, nombre_pais');
            return res.json(user[0]);
        });
    }
    listMonedas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const coon = yield (0, database_1.connect)();
            const user = yield coon.query('select id_moneda,nombre_moneda,simbolo_moneda,valor_moneda from monedas');
            return res.json(user[0]);
        });
    }
    list_id(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.params);
                const { id } = req.params;
                const coon = yield (0, database_1.connect)();
                const user = yield coon.query('select id_pais, nombre_pais from paises where id_pais = ? group by id_pais, nombre_pais', [id]);
                return res.json(user[0]);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    list_moneda_pais(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.params);
                const { id } = req.params;
                const coon = yield (0, database_1.connect)();
                const resul = yield coon.query('select nombre_moneda,simbolo_moneda,valor_moneda from paises inner join monedas on paises.id_moneda = monedas.id_moneda where id_pais = ?', [id]);
                return res.json(resul[0]);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    list_moneda_pais_user(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.params);
                const { id } = req.params;
                const coon = yield (0, database_1.connect)();
                const resul = yield coon.query('select monedas.id_moneda, monedas.nombre_moneda, monedas.simbolo_moneda, monedas.valor_moneda from usuarios inner join paises on usuarios.id_pais = paises.id_pais left join monedas on paises.id_moneda = monedas.id_moneda where usuarios.id_usuario = ?', [id]);
                return res.json(resul[0]);
            }
            catch (e) {
                console.log(e);
                res.sendStatus(400);
                res.statusMessage = 'Error en el parametro';
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const coon = yield (0, database_1.connect)();
                yield coon.query('INSERT INTO paises set ?', [req.body]);
                return res.json(req.body);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.params);
                const { id } = req.params;
                const coon = yield (0, database_1.connect)();
                yield coon.query('DELETE FROM paises WHERE  id_pais = ?', [id]);
                return res.json({ text: 'Pais ' + id + ' eliminado correctamente' });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const { id } = req.params;
                const coon = yield (0, database_1.connect)();
                yield coon.query('update paises set ? where id_pais = ?', [req.body, id]);
                return res.json({ text: 'Pais ' + id + ' actualizado correctamente' });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
const paisesController = new PaisesController();
exports.default = paisesController;

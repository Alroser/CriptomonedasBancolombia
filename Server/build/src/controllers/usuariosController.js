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
class UsuariosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const coon = yield (0, database_1.connect)();
            const user = yield coon.query('select * from usuarios');
            return res.json(user[0]);
        });
    }
    list_id(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.params);
                const { id } = req.params;
                const coon = yield (0, database_1.connect)();
                const user = yield coon.query('select * from usuarios where id_usuario = ?', [id]);
                return res.json(user[0]);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    list_mon_usu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.params);
                const { id } = req.params;
                const coon = yield (0, database_1.connect)();
                const user = yield coon.query('select monedas.id_moneda,nombre_moneda,simbolo_moneda,valor_moneda from usuarios_monedas inner join monedas on usuarios_monedas.id_moneda = monedas.id_moneda where usuarios_monedas.id_usuario = ?', [id]);
                return res.json(user[0]);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    listMonedas_id(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.params);
                const { id } = req.params;
                const coon = yield (0, database_1.connect)();
                const user = yield coon.query('select id_moneda,nombre_moneda,simbolo_moneda,valor_moneda from monedas where id_moneda = ?', [id]);
                return res.json(user[0]);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    list_mon_disponibles_usu_pais(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.params);
                const { id } = req.params;
                const coon = yield (0, database_1.connect)();
                const user = yield coon.query('select monedas.id_moneda, monedas.nombre_moneda from usuarios inner join paises on usuarios.id_pais = paises.id_pais inner join monedas on paises.id_moneda = monedas.id_moneda where usuarios.id_usuario = ? and monedas.id_moneda NOT IN ( select monedas.id_moneda from usuarios_monedas inner join monedas on usuarios_monedas.id_moneda = monedas.id_moneda where usuarios_monedas.id_usuario = ? )', [id, id]);
                return res.json(user[0]);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const coon = yield (0, database_1.connect)();
                yield coon.query('INSERT INTO usuarios set ?', [req.body]);
                return res.json(req.body);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    create_mon_usu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const coon = yield (0, database_1.connect)();
                yield coon.query('INSERT INTO usuarios_monedas set ?', [req.body]);
                return res.json({ text: 'Moneda agregada correctamente' });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.params);
                const { id } = req.params;
                const coon = yield (0, database_1.connect)();
                yield coon.query('DELETE FROM usuarios WHERE  id_usuario = ?', [id]);
                return res.json({ text: 'Usuario ' + id + ' eliminado correctamente' });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    deleteUsuarioMoneda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.params);
                const { id } = req.params;
                const { mon } = req.params;
                const coon = yield (0, database_1.connect)();
                yield coon.query('DELETE FROM usuarios_monedas WHERE  id_usuario = ? and id_moneda = ?', [id, mon]);
                return res.json({ text: 'Usuario ' + id + ' eliminado correctamente' });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const { id } = req.params;
                const coon = yield (0, database_1.connect)();
                yield coon.query('update usuarios set ? where id_usuario = ?', [req.body, id]);
                return res.json({ text: 'Usuario ' + id + ' actualizado correctamente' });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    updateMoneda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                const { id } = req.params;
                const coon = yield (0, database_1.connect)();
                yield coon.query('update monedas set  ? where id_moneda = ?', [req.body, id]);
                return res.json({ text: 'Moneda ' + id + ' actualizado correctamente' });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
const usuariosController = new UsuariosController();
exports.default = usuariosController;

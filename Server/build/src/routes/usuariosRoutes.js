"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = __importDefault(require("../controllers/usuariosController"));
const usuariosValidators_1 = require("../validators/usuariosValidators");
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', usuariosController_1.default.list);
        this.router.get('/listar-monedas-usuario/:id', usuariosValidators_1.validateListUsuarios, usuariosController_1.default.list_mon_usu);
        this.router.get('/monedas/:id', usuariosValidators_1.validateListUsuarios, usuariosController_1.default.listMonedas_id);
        this.router.get('/:id', usuariosValidators_1.validateListUsuarios, usuariosController_1.default.list_id);
        this.router.get('/listar-monedas-disponibles-usuario/:id', usuariosValidators_1.validateListUsuarios, usuariosController_1.default.list_mon_disponibles_usu_pais);
        this.router.post('/', usuariosController_1.default.create);
        this.router.post('/create-mon-usu/', usuariosController_1.default.create_mon_usu);
        this.router.delete('/:id', usuariosValidators_1.validateListUsuarios, usuariosController_1.default.delete);
        this.router.delete('/delete-usuario-moneda/:id/:mon', usuariosController_1.default.deleteUsuarioMoneda);
        this.router.put('/:id', usuariosController_1.default.update);
        this.router.put('/actualiza-moneda/:id', usuariosController_1.default.updateMoneda);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paisesController_1 = __importDefault(require("../controllers/paisesController"));
const paisesValidators_1 = require("../validators/paisesValidators");
class PaisesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/listar', paisesController_1.default.list); //No
        this.router.get('/monedas', paisesController_1.default.listMonedas); //No
        this.router.get('/id/:id', paisesValidators_1.validateListPaises, paisesController_1.default.list_id);
        this.router.get('/list-moneda-pais/:id', paisesValidators_1.validateListPaises, paisesController_1.default.list_moneda_pais);
        this.router.get('/list-moneda-pais-usuario/:id', paisesValidators_1.validateListPaises, paisesController_1.default.list_moneda_pais_user);
        this.router.post('/crear-pais', paisesValidators_1.validateCreatePaises, paisesController_1.default.create);
        this.router.delete('/eliminar-pais/:id', paisesValidators_1.validateListPaises, paisesController_1.default.delete);
        this.router.put('/actualizar/:id', paisesValidators_1.validateCreatePaises, paisesController_1.default.update);
    }
}
const paisesRoutes = new PaisesRoutes();
exports.default = paisesRoutes.router;

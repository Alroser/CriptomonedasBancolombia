"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gestorasController_1 = __importDefault(require("../controllers/gestorasController"));
const gestorasValidators_1 = require("../validators/gestorasValidators");
class GestorasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/listar', gestorasController_1.default.listGestoras);
        this.router.get('/list-moneda-gestora/:id', gestorasValidators_1.validateList, gestorasController_1.default.listMonedasGestoras);
        this.router.get('/list-moneda-gestora-pais-usuario/:id', gestorasValidators_1.validateList, gestorasController_1.default.listMonedasGestorasPais);
        this.router.post('/crear-gestora', gestorasValidators_1.validateCreateGestora, gestorasController_1.default.createGestora);
    }
}
const gestorasRoutes = new GestorasRoutes();
exports.default = gestorasRoutes.router;

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class LoginController {
    profile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.params);
                const { id } = req.params;
                const coon = yield (0, database_1.connect)();
                const user = yield coon.query('select * from login where user = ?', [id]);
                return res.json(user[0]);
            }
            catch (error) {
                return res.send('Ocurrio un error');
            }
        });
    }
    sigup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const coon = yield (0, database_1.connect)();
            yield coon.query('INSERT INTO login set ?', [req.body]);
            //return res.json(req.body);
            const savedUser = ([req.body]);
            const token = jsonwebtoken_1.default.sign({ savedUser }, process.env.TESTING || 'test');
            res.header('auth-token', token).json(savedUser);
        });
    }
    sigin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const coon = yield (0, database_1.connect)();
                yield coon.query('select count(*) from login where user = ?', [req.body]);
                const savedUser = ([req.body]);
                const token = jsonwebtoken_1.default.sign({ savedUser }, process.env.TESTING || 'test');
                res.header('auth-token', token).json(savedUser);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
const loginController = new LoginController();
exports.default = loginController;

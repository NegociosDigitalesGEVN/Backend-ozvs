"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtCheck = void 0;
const utils_1 = require("../utils/utils");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const keys_1 = __importDefault(require("../config/keys"));
const jwtCheck = (req, res, next) => {
    try {
        //Obtener JWT de la petición
        const token = req.headers["auth"];
        //Obtener el payload
        let payload = utils_1.utils.getPayload(token);
        // Generar y enviar el nuevo token de auth
        const newToken = jsonwebtoken_1.default.sign(payload, keys_1.default.secret.jwt, { expiresIn: '1h' });
        // Agregar el nuevo JWT a la petición
        res.setHeader("auth", newToken);
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(401).send("No autorized");
    }
};
exports.jwtCheck = jwtCheck;
//# sourceMappingURL=jwtCheck.js.map
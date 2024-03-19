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
exports.usuarioController = void 0;
const validator_1 = __importDefault(require("validator"));
const usuarioModelo_1 = __importDefault(require("../models/usuarioModelo"));
const utils_1 = require("../utils/utils");
class UsuarioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.json({ message: "Listado de Usuario", code: 0 });
            }
            catch (error) {
                return res.status(500).json({ message: `${error.message}` });
            }
        });
    }
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = req.body; // Suponiendo que el usuario se envía en el cuerpo de la solicitud
                if (!usuario.email || !usuario.password) {
                    return res.status(400).json({ message: "Ingresa correo electrónico y contraseña", code: 1 });
                }
                if (!validator_1.default.isEmail(usuario.email)) {
                    return res.status(400).json({ message: "El correo electrónico no es válido", code: 1 });
                }
                if (!validator_1.default.isLength(usuario.password, { min: 6 })) {
                    return res.status(400).json({ message: "La contraseña debe tener al menos 6 caracteres", code: 1 });
                }
                if (!usuario.role || !usuario.role) {
                    return res.status(400).json({ message: "Ingresa un rol", code: 1 });
                }
                const existeUsuario = yield usuarioModelo_1.default.getByEmail(usuario.email); // Llama al método estático getByEmail
                if (existeUsuario) {
                    return res.status(400).json({ message: "Ya existe un usuario con el mismo correo electrónico", code: 1 });
                }
                else {
                    // Encriptar la contraseña antes de agregar el usuario
                    const encryptedText = yield utils_1.utils.hashPassword(usuario.password);
                    usuario.password = encryptedText;
                    // Agregar usuario si no existe
                    const result = yield usuarioModelo_1.default.add(usuario);
                    return res.json({ message: "Usuario agregado correctamente", code: 0 });
                }
            }
            catch (error) {
                return res.status(500).json({ message: `${error.message}` });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = req.body; // Suponiendo que los datos del usuario a actualizar se envían en el cuerpo de la solicitud
                const existeUsuario = yield usuarioModelo_1.default.getByEmail(usuario.email); // Verifica si el usuario existe
                if (!existeUsuario) {
                    return res.status(404).json({ message: "Usuario no encontrado", code: 1 });
                }
                var encryptedText = yield utils_1.utils.hashPassword(usuario.password);
                usuario.password = encryptedText;
                const result = yield usuarioModelo_1.default.update(usuario);
                // Actualiza el usuario si existe
                return res.json({ message: "Usuario modificado correctamente", code: 0 });
            }
            catch (error) {
                return res.status(500).json({ message: `${error.message}` });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const email = req.body.email; // Suponiendo que el parámetro de la URL contiene el correo electrónico del usuario a eliminar
                const existeUsuario = yield usuarioModelo_1.default.getByEmail(email); // Verifica si el usuario existe
                if (!existeUsuario) {
                    return res.status(404).json({ message: "Usuario no encontrado", code: 1 });
                }
                const result = yield usuarioModelo_1.default.delete(email); // Elimina el usuario si existe
                return res.json({ message: "Usuario eliminado correctamente", code: 0 });
            }
            catch (error) {
                return res.status(500).json({ message: `${error.message}` });
            }
        });
    }
}
exports.usuarioController = new UsuarioController();
//# sourceMappingURL=usuarioController.js.map
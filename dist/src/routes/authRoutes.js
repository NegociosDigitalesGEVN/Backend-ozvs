"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const __1 = require("..");
const validator_check_1 = require("../middleware/validator.check");
class AuthRoutes {
    //Inicializa
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post("/", (0, __1.authValidatorRules)(), [validator_check_1.validate], authController_1.authController.iniciarSesion);
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.router;
//# sourceMappingURL=authRoutes.js.map
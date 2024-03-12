"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidatorRules = void 0;
const express_validator_1 = require("express-validator");
const authValidatorRules = () => {
    return [
        (0, express_validator_1.body)("username").trim().not().isEmpty().withMessage("Campo requerido")
            .isLength({ min: 3, max: 150 }).withMessage("Rango incorrecto"),
        (0, express_validator_1.body)("password").trim().not().isEmpty().withMessage("Campo requerido")
            .isLength({ min: 3, max: 100 }).withMessage("Rango incorrecto")
    ];
};
exports.authValidatorRules = authValidatorRules;
//# sourceMappingURL=auth.rules.js.map
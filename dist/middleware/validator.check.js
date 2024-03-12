"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const express_validator_1 = require("express-validator");
const validate = (req, res, next) => {
    //Obtener los errores a partir de la petición original
    const errors = (0, express_validator_1.validationResult)(req);
    //Si no existen errores en la petición continua
    if (errors.isEmpty())
        return next();
    //TO DO: Devolver los errores con un estado de petición 400
    console.log(errors);
    return res.status(400).json(errors.array());
};
exports.validate = validate;
//# sourceMappingURL=validator.check.js.map
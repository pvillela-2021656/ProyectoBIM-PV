import { body } from "express-validator";
import { handleErrors } from "./handle_errors.js";
import { validarCampos } from "./validate-fields.js";

export const newCategoryValidator = [
    body("categoryName").notEmpty().withMessage("The name of the category IS required."),
    body("categoryDescription").notEmpty().withMessage("The description of the category IS required."),
    validarCampos,
    handleErrors
];
import { Router } from "express";
import { newCategoryValidator } from "../middlewares/category-validator.js";
import { newCategory } from "./category.controller.js";

const router = Router();

router.post("/newCategory", newCategory, newCategoryValidator)

export default router;
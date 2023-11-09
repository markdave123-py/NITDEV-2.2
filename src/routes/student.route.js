import { Router } from "express";
import { signup } from "../controllers/student.controller.js";

export const studentRouter = Router();

studentRouter.post('/signup', signup);

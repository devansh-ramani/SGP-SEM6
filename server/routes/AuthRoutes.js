import { Router } from "express";
import { signup } from "../controllers/AuthController.js";
// import { verifyToken } from "../middlewares/AuthMiddleware.js";
// import multer from "multer";

const authRoutes = Router();
authRoutes.post("/signup", signup);
// const upload = multer({ dest: "uploads/profiles/" });

export default authRoutes;

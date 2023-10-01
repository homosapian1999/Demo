import express from "express";
import { registerController } from "../controllers/authController.js";

const router = express.Router();

router.post("/create", registerController);

export default router;

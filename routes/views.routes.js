import express from "express";

const router = express.Router();

import { controllerHome, controllerProductos, controllerInventario, controllerCarro } from "../controllers/views.controllers.js";

router.get(["/", "home"], controllerHome, (req, res) => { });
router.get("/producto", controllerProductos, (req, res) => { });
router.get("/inventario", controllerInventario, (req, res) => { });
router.get("/carro", controllerCarro, (req, res) => { });

export default router;

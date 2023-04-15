import express from "express";

const router = express.Router();
import { getProductos, getProductById, addProducts, editProduct, deleteProductById} from "../controllers/productos.controller.js";

router.get("/productos", getProductos, (req, res) => { });
router.get("/productos/:id", getProductById, (req, res) => { });
router.post("/productos", addProducts, (req, res) => { });
router.put("/productos", editProduct, (req, res) => { });
router.delete("/producto/:id", deleteProductById, (req, res) => { });

export default router;
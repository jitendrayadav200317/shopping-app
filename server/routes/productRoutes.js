import express from "express";
import { product } from "../controllers/productControllers.js";

const productRouter = express.Router();

productRouter.post("/product ", product);

export default productRouter;

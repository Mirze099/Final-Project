import { ProductController } from "../controller/Controller.js";
import express from "express";
export let route = express.Router();

route.get("/", ProductController.getAll);
route.get("/:id", ProductController.getById);
route.post("/", ProductController.post);
route.delete("/:id", ProductController.delete);
route.put("/:id", ProductController.edit);

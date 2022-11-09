import express from "express";
import { apagarDados, atualizarDados, inserirDados, lerDados, lerUsuario } from "../services/crud.service";


const router = express.Router();

router.post("/user",inserirDados);
router.get("/user",lerDados)
router.get("/user/:id",lerUsuario)
router.put("/user/:id",atualizarDados)
router.delete("/user/:id",apagarDados)





export default router;
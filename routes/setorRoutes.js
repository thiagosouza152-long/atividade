import express from "express";
import { cadastrarSetor,
    listarSetores,
    buscarSetorPorIndice,
    deletarSetor,
    atualizarSetor
} from "../controller/setorController.js";

const router = express.Router();
//Pega a função do framework express e salva na variavel router

router.post("/", cadastrarSetor)
router.get("/", listarSetores)
router.patch("/:indice", buscarSetorPorIndice )
router.delete("/:indice", deletarSetor)
router.get("/:indice", atualizarSetor)

//Declara que ser chamar a rota POST vai executar a função de cadastrar do controller

export default router;
//torna publica a rota dentro do backend

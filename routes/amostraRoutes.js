import express from "express";
import { cadastrarAmostra,
    listarTodos,
    buscarAmostraPorId,
    deletarAmostra,
    atualizarAmostra
} from "../controller/amostraController.js";

const router = express.Router();
//Pega a função do framework express e salva na variavel router

router.post("/", cadastrarAmostra)
router.get("/", listarTodos)
router.patch("/:indice", atualizarAmostra )
router.delete("/:indice", deletarAmostra)
router.get("/:indice", buscarAmostraPorId)

//Declara que ser chamar a rota POST vai executar a função de cadastrarProduto do controller

export default router;
//torna publica a rota dentro do backend

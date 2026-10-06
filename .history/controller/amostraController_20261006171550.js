import { amostra } from "../model/amostra.js";
import { 
    cadastrar,
    listar,
    buscarPorIndice,
    excluir
 } from "../repository/amostraRepository.js";

// cadastrarAmostra(req, res): lê o body, instancia Amostra com new, chama o Repository e responde com status 201
function cadastrarAmostra(req, res) {
  const { codigo, material, origem, resultado } = req.body;
  const novaAmostra = new Amostra(codigo, material, origem, resultado);
  
  cadastrar(novaAmostra);
  
  return res.status(201).json(novaAmostra);
}

// listarAmostras(req, res): consulta o Repository e responde com status 200
function listarAmostras(req, res) {
  return res.status(200).json(listar());
}

// buscarAmostra(req, res): lê o índice em req.params, consulta o Repository e responde com status 200 ou 404
function buscarAmostra(req, res) {
  const { indice } = req.params;
  const amostra = buscarPorIndice(Number(indice));

  // Substituído 'if' pelo operador ternário
  return amostra 
    ? res.status(200).json(amostra) 
    : res.status(404).json({ erro: "Amostra não encontrada" });
}

function excluirAmostra(req, res) {
  const { indice } = req.params;
  const idx = Number(indice);
  const amostraExiste = buscarPorIndice(idx);

  // Executa a exclusão e retorna 200 se existir, caso contrário retorna 404
  return amostraExiste 
    ? (excluir(idx), res.status(200).json({ mensagem: "Amostra excluída com sucesso" })) 
    : res.status(404).json({ erro: "Amostra não encontrada para exclusão" });
}

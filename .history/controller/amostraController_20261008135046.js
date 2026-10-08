import { Amostra } from "../model/Amostra.js";
import { cadastrar, listar, buscarPorId, atualizar, deletar } from "../repository/amostraRepository.js"


export function cadastrarAmostra(req, res){
    const {codigo, material, origem, resultado} = req.body

    const amostra = new Amostra(codigo, material, origem, resultado);

    cadastrar(amostra)

    res.status(201).json(amostra);
}

export function listarTodos(req, res){
    const amostra = listar();

    res.status(200).json(amostra)
}


export function atualizarAmostra(req, res){
    const indice = Number(req.params.indice);

    const amostra = buscarPorId(indice);

    if(!amostra) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        })
    }

    const {codigo, material, origem, resultado} = req.body;

    if(codigo !== undefined){
        amostra.codigo = codigo
    }

    if(material !== undefined){
        amostra.material = material
    }

    if(origem !== undefined){
        amostra.origem = origem;
    }

    if(resultado !== undefined){
        amostra.resultado = resultado
    }

    atualizar(indice, amostra);

    res.status(200).json(amostra);
}

export function deletarAmostra(req, res){
    const indice = Number(req.params.indice);

    console.log(indice);

    const amostra = buscarPorId(indice);

    console.log(amostra);
        
    if (!amostra){
        return res.status(404).json({
            mensagem: "Amostra nao encontrado"
        })
    }

    deletar(indice);

    res.status(200).json({
        mensagem: "Amostra excluido com sucesso"
    });
}


export function buscarAmostraPorId(req, res){
    const indice = Number(req.params.indice);

    const amostra = buscarPorId(indice);

    if(!amostra){
        return res.status(404).json({
            mensagem: "Amostra nao encontrado"
        });
    }

    res.status(200).json(amostra)
}
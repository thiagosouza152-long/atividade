import { Setor } from "../model/Setor.js";
import { cadastrar, listar, buscarPorIndice, atualizar, deletar } from "../repository/setorRepository.js"


export function cadastrarSetor(req, res){
    const {nome, sigla, responsavel, ramal} = req.body

    const setor = new Setor(nome, sigla, responsavel, ramal);

    cadastrar(setor)

    res.status(201).json(setor);
}

export function listarSetores(req, res){
    const setor = listar();

    res.status(200).json(setor)
}


export function atualizarSetor(req, res){
    const indice = Number(req.params.indice);

    const setor = buscarPorIndice(indice);

    if(!setor) {
        return res.status(404).json({
            mensagem: "Setor não encontrado"
        })
    }

    const {nome, sigla, responsavel, ramal} = req.body;

    if(nome !== undefined){
        setor.nome = nome
    }

    if(sigla !== undefined){
        setor.sigla = sigla
    }

    if(responsavel !== undefined){
        setor.responsavel = responsavel;
    }

    if(ramal !== undefined){
        setor.ramal = ramal
    }

    atualizar(indice, setor);

    res.status(200).json(setor);
}

export function deletarSetor(req, res){
    const indice = Number(req.params.indice);

    console.log(indice);

    const setor = buscarPorIndice(indice);

    console.log(setor);
        
    if (!setor){
        return res.status(404).json({
            mensagem: "Setor nao encontrado"
        })
    }

    deletar(indice);

    res.status(200).json({
        mensagem: "Amostra excluido com sucesso"
    });
}


export function buscarSetorPorIndice(req, res){
    const indice = Number(req.params.indice);

    const setor = buscarPorIndice(indice);

    if(!setor){
        return res.status(404).json({
            mensagem: "Setor nao encontrado"
        });
    }

    res.status(200).json(setor)
}
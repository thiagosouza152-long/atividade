const amostras = []

export function cadastrar(amostra){
    amostras.push(amostra);
}

export function listar(){
    return amostras
}

export function buscarPorIndice(indice){
    return amostras[indice];
}

export function excluir(indice){
    amostras.splice[indice, 1];
}
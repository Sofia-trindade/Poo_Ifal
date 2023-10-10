class Comida{
    constructor(descricao, unidadeDeMedida, precoUnitario, foto){
    this.descricao = descricao;
    this.unidadeDeMedida = unidadeDeMedida;
    this.precoUnitario = precoUnitario;
    this.foto = foto;}
};

class Cardapio{
    constructor (){
        this.listaDeComidas = [];
    }

    adicionarComida(comida){
        this.listaDeComidas.push(comida);
    }
}


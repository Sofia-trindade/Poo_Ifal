class Aluno {
    constructor(foto, primeiroNome, ultimoNome, dataDeNascimento, cidade){
        this.foto = foto;

        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;

        this.dataDeNascimento = dataDeNascimento;
        this.cidade = cidade;
    }

    getNomePadraoAmericano(){
        return`${this.ultimoNome}, ${this.primeiroNome}`;
    }

    getNomePadraoBrasileiro(){
        return`${this.primeiroNome} ${this.ultimoNome}`;
    }

    getIdade(){
        let hoje = new Date();
        let idade = hoje.getFullYear() - this.dataDeNascimento.getFullYear();
        return idade;
    }

}
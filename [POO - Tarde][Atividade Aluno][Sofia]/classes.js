class Aluno {
    constructor(foto, primeiroNome, ultimoNome, dataDeNascimento, cidade){
        this.foto = foto;

        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;

        this.dataDeNascimento = new Date (dataDeNascimento);
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

// classe container

//adicione 2 atributos a esta classe:
//titulo
//listaDeAlunos

//o construtor deverá ter 1 entrada: titulo
// o construtor deverá inicializar:
// o atributo titulo com a entrada titulo;
// e o atributo listaDeAlunos com um array vazio

class Turma{
    constructor(titulo){
        this.titulo = titulo;
        this.listaDeAlunos = [];
    }
    adicionarAluno(aluno){
        this.listaDeAlunos.push(aluno);
    }
}


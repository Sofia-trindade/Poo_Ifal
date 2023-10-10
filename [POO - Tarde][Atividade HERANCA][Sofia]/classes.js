class participantes{
    constructor(nome, cpf, dataDeNascimento){
        this.nome = nome;
        this.cpf = cpf;
        this.dataDeNascimento = dataDeNascimento;
        
    }
};

// extends indica q Aluno é filho de Participante
class Aluno extends Participantes{
    constructor(nome, cpf, dataDeNascimento, matricula){
        // osuper chama o construtos da classe mãe
        super(nome, cpf, dataDeNascimento);
        this.matricula = matricula;
    }
}

class Professor extends Participantes{
    constructor(nome, cpf, dataDeNascimento, siape, formacao){
        super(nome, cpf, dataDeNascimento);
        this.siape = siape;
        this.formacao = formacao;
    }
};

class Turma{
    constructor(){
        this.listaDeParticipantes = [];
    
    }

    adicionarParticipante(participantes){
        this.listaDeParticipantes.push(participantes)
    }
};
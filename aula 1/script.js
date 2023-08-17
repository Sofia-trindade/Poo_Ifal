let aluno1 = {nome: 'Adson', idade: 22};
let aluno2 = {nome: 'Milton', idade: 19};
let aluno3 = {nome: 'Sofia', idade: 25};
let aluno4 = {nome: 'Marya Clara', idade: 19};
let aluno5 = {nome: 'Marley', idade: 19};
let aluno6 = {nome: 'Maria Paula', idade: 19};

let alunos = [];
alunos.push(aluno1);
alunos.push(aluno2);
alunos.push(aluno3);
alunos.push(aluno4);
alunos.push(aluno5);
alunos.push(aluno6);



    for (let i = 0; i < alunos.length; i++) {
        console.log(`${alunos[i].nome} tem ${alunos[i].idade} anos`);
    }

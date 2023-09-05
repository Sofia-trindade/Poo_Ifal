let aluno1 = new Aluno('estela.jpeg', 'Sofia', 'Trindade', new Date ('1998-2-20'), 'Satuba');
let aluno2 = new Aluno ('jeniffer.jpeg', 'Jeniffer', 'Esther', new Date ('1998-2-20'), 'Maceió');
let aluno3 = new Aluno ('milton.jpeg', 'Milton','Silva', new Date ('1998-2-20'), 'União dos Palmares');
let aluno4 = new Aluno ('alexsander.png', 'Alexsander', 'Santos', new Date ('1998-2-20'), 'Maceió');
let aluno5 = new Aluno ('paula.jpeg', 'Paula', 'Alves', new Date ('1998-2-20'), 'Maceió');
let aluno6 = new Aluno ('hemerson.jpeg', 'Hemerson', 'Silva', new Date ('1998-2-20'), 'Maceió');
let aluno7 = new Aluno ('roberta.jpeg', 'Roberta', 'Candido', new Date ('1998-2-20'), 'Satuba');
let aluno8 = new Aluno ('ruiva.jpeg', 'Marya Ruiva', 'Lima', new Date ('1998-2-20'), 'Maceió');
let aluno9 = new Aluno ('isabely.jpeg', 'Isabely', 'Almeida', new Date ('1998-2-20'), 'Rio Largo');
let aluno10 = new Aluno ('marley.jpg', 'Marley', 'Golçaves', new Date ('1998-2-20'), 'Maceió');


let listaDeAlunos = [];

listaDeAlunos.push(aluno1);
listaDeAlunos.push(aluno2);
listaDeAlunos.push(aluno3);
listaDeAlunos.push(aluno4);
listaDeAlunos.push(aluno5);
listaDeAlunos.push(aluno6);
listaDeAlunos.push(aluno7);
listaDeAlunos.push(aluno8);
listaDeAlunos.push(aluno9);
listaDeAlunos.push(aluno10);



for (let i = 0; i < listaDeAlunos.length; i++ ){
    document.write(`
    <div class='card'>
    <img class='foto' src='img/${listaDeAlunos[i].foto}'/>
    <div class= 'nome'><h2>${listaDeAlunos[i].getNomePadraoBrasileiro()}</h2></div>
    <div><h3>${listaDeAlunos[i].getIdade()} anos</h3></div>
    <div><h3>${listaDeAlunos[i].cidade}</h3></div>
    </div>
    `
    )
}

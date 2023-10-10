let aluno1 = new Aluno('Jeniffer','125.654.987-52','25/05/1996','202236958');
let aluno2 = new Aluno('Marya','125.654.987-53','20/05/2001','2023369589');
let aluno3 = new Aluno('Paula','125.654.987-54','36/02/1998','2023369587');
let aluno4 = new Aluno('Milton','125.654.987-55','23/04/2002','2023369585');
let aluno5 = new Aluno('Ana','125.654.987-56','22/06/2003','2023369588');

let Professor1 = new Professor('Alexsander','666.666.666-66','15/03/1986','12345','Graduação');
let Professor2 = new Professor('Glauber','777.777.777-77','16/03/1987','54321', 'Doutorado');

let modulo2 = new Turma();
modulo2.adicionarParticipante(Professor1);
modulo2.adicionarParticipante(Professor2);
modulo2.adicionarParticipante(aluno1);
modulo2.adicionarParticipante(aluno2);
modulo2.adicionarParticipante(aluno3);
modulo2.adicionarParticipante(aluno4);
modulo2.adicionarParticipante(aluno5);


console.log(modulo2)
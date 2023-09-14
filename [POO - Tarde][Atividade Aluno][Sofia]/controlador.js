// trazendo os elementos html p/ o javascript:
let inputPrimeiroNome = document.getElementById('iptPrimeiroNome');
let inputUltimoNome = document.getElementById('iptUltimoNome');
let inputDtDeNascimento = document.getElementById('iptDataDeNascimento');
let inputCidade = document.getElementById('iptCidade');
let buttonCadastro = document.getElementById('btCadastrar');
let divContainerCards = document.getElementById('containerDeCards');

// listeners ou fofoqueiros -----------------------
buttonCadastro.addEventListener('click', quandoClicarEmCadastrar);

//------------------------------------------

function quandoClicarEmCadastrar(){
    let alunoTemp = new Aluno (
        '',
        inputPrimeiroNome.value,
        inputUltimoNome.value,
        inputDtDeNascimento.value,
        inputCidade.value
    );
    listaDeAlunos.push(alunoTemp);
    desenharCards(divContainerCards)

    console.log(listaDeAlunos);
}

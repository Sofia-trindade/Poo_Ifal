// 'puxar' os elementos necessários do arquivos HTML
let inputDescricao = document.getElementById('iptDescricao');
let inputUnidadeDeMedida = document.getElementById('iptUnidadeDeMedida');
let inputPrecoUnitario = document.getElementById('iptPrecoUnitario');
let buttonAdicionarComida = document.getElementById('btAdicionarComida');
let divContainer = document.getElementById('containerDeCards')

//criar 1 ouvinte para o botão:
buttonAdicionarComida.addEventListener('click', quandoClicarEmAdicionar);

//criar um cardapio:
let meuCardapio = new Cardapio();

// criar função que será chamado quando clicar no botão cadastrar:
function quandoClicarEmAdicionar(){
    let comida = new Comida (
        '',
        inputDescricao.value,
        inputUnidadeDeMedida.value,
        inputPrecoUnitario.value
    );

    meuCardapio.adicionarComida(comida);

    desenharCards(meuCardapio, divContainer);

    
}
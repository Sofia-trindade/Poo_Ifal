function desenharCards(cardapio, divContainer){
    divContainer.innerHTML = '';

    for (let i = 0; i < cardapio.listaDeAlunos.length; i++ ){
        divContainer.innerHTML += `
            <div class='card'>
            <img class='foto' src=''/>
            <div class= 'Descricao'><h2>${cardapio.listaDeComida[i].descricao}</h2></div>
            <div><h3>${cardapio.listaDeComida[i].unidadeDeMedida} ml</h3></div>
            <div><h3>${cardapio.listaDeComida[i].precoUnitario}</h3></div>
            </div>
        `;
    }
}
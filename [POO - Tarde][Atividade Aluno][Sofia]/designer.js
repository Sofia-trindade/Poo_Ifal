function desenharCards(container){
    //esvaziando o container
    container.innerHTML = '';

    //preenchendo o container
    for (let i = 0; i < listaDeAlunos.length; i++ ){
        container.innerHTML += `
            <div class='card'>
            <img class='foto' src='img/jeniffer.jpeg'/>
            <div class= 'nome'><h2>${listaDeAlunos[i].getNomePadraoBrasileiro()}</h2></div>
            <div><h3>${listaDeAlunos[i].getIdade()} anos</h3></div>
            <div><h3>${listaDeAlunos[i].cidade}</h3></div>
            </div>
        `;
    }
}


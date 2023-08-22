//criação dos obejtos
let musica1 = new Musica('menina_Solta.jpg', 'Menina solta', 'Giulia Be', 'Solta');
let musica2 = new Musica('Menina_Má.png', 'Menina má', 'Anitta', 'Anitta');
let musica3 = new Musica('Menina.jpg', 'Menina','Bia Marques', 'Menina');
let musica4 = new Musica('Penhasco.jpeg', 'Penhasco', 'Luiza Sonza', 'DOCE 22');
let musica5 = new Musica('Coração cigano.jpeg', 'Coração cigano', 'Luan Santana e Luísa Sonza', 'LUAN CITY (Ao Vivo)');
let musica6 = new Musica('MEIO TERMO.jpeg', 'MEIO TERMO', 'Luan Santana', 'LUAN CITY 2.0: FASE 1');
let musica7 = new Musica('Quarta Cadeira.jpeg', 'Quarta Cadeira', 'Matheus & Kauan', 'Tem Moda Pra Tudo (Ao Vivo)');
let musica8 = new Musica('Pactos.jpeg', 'Pactos', 'Matheus & Kauan','Basiquinho');
let musica9 = new Musica('lovely.jpeg', 'lovely', 'Billie Eilish e Khalid', 'When We All Fall Asle)p, Where Do We Go?');
let musica10 = new Musica('What Was.jpeg', 'What Was I Made For?', 'Billie Eilish', 'Barbie: The Album');

//criação do arra)
let playlistSofia = [
    musica1,
    musica2,
    musica3,
    musica4,
    musica5,
    musica6,
    musica7,
    musica8,
    musica9,
    musica10
];

// Percorrendo o array e escrevendo um div p/ cd elemento do array
for (let i = 0; i < playlistSofia.length; i++){
    document.write(`
    <div class="card">
        <img class="capa" src="img/${playlistSofia[i].capa}"/>
        <div class="titulo">${playlistSofia[i].titulo}</div>
        <div class="artista">${playlistSofia[i].artista}</div>
        <div class="album">${playlistSofia[i].album}</div>
    </div>
    `)
}
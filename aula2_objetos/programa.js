let musica1 = {Titulo: 'Menina solta', Artista: 'Giulia Be', Album: 'Solta'};
let musica2 = {Titulo: 'Menina má', Artista: 'Anitta', Album: 'Anitta'};
let musica3 = {Titulo: 'Menina', Artista: 'Bia Marques', Album: 'Menina'};
let musica4 = {Titulo: 'Penhasco.', Artista: 'Luiza Sonza', Album: 'DOCE 22'};
let musica5 = {Titulo: 'Coração cigano', Artista: 'Luan Santana e Luísa Sonza', Album: 'LUAN CITY (Ao Vivo)'};
let musica6 = {Titulo: 'MEIO TERMO', Artista: 'Luan Santana', Album: 'LUAN CITY 2.0: FASE 1'};
let musica7 = {Titulo: 'Quarta Cadeira', Artista: 'Matheus & Kauan', Album: 'Tem Moda Pra Tudo (Ao Vivo)'};
let musica8 = {Titulo: 'Pactos', Artista: 'Matheus & Kauan', Album: 'Basiquinho'};
let musica9 = {Titulo: 'lovely', Artista: 'Billie Eilish e Khalid', Album: 'When We All Fall Asleep, Where Do We Go?'};
let musica10 = {Titulo: 'What Was I Made For?', Artista: 'Billie Eilish', Album: 'Barbie: The Album'};

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
    let musica = playlistSofia[i];
    document.write(`
    <div class="card">
        <div class="titulo">${playlistSofia[i].Titulo}</div>
        <div class="artista">${playlistSofia[i].Artista}</div>
        <div class="album">${playlistSofia[i].Album}</div>
    </div>
    `)
}
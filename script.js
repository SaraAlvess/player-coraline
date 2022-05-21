let musicas = [
    {titulo:'End Credits', artista:'Bruno Coulais', src:'musics/1. End Credits.mp3', img:'images/1.-final.png'},
    {titulo:'Dreaming', artista:'Bruno Coulais', src:'musics/2. Dreaming.mp3', img:'images/2.-dream.png'},
    {titulo:'Installation', artista:'Bruno Coulais', src:'musics/3. Installation.mp3', img:'images/3.-housepng.png'},
    {titulo:'Wybie', artista:'Bruno Coulais', src:'musics/4. Wybie.mp3', img:'images/4.-wybiepng.png'},
    {titulo:'Exploration', artista:'Bruno Coulais', src:'musics/5. Exploration.mp3', img:'images/5.--coraline-exploration.png'},
    {titulo:'Other Father', artista:'Bruno Coulais', src:'musics/6. Other Father Song.mp3', img:'images/6.-outher-pather.png'},
    {titulo:'Bobinsky', artista:'Bruno Coulais', src:'musics/7. Bobinsky.mp3', img:'images/7.-bobinskypng.png'},
    {titulo:'Mice Circus', artista:'Bruno Coulais', src:'musics/8. Mice Circus.mp3', img:'images/8-mices.png'},
    {titulo:'Sirens Of The Sea', artista:'Bruno Coulais', src:'musics/9. Sirens Of The Sea.mp3', img:'images/10.-senhoraspng.png'},
    {titulo:'Ghost Children', artista:'Bruno Coulais', src:'musics/10. Ghost Children.mp3', img:'images/9.-ghostspng.png'},
    {titulo:'Dangerous', artista:'Bruno Coulais', src:'musics/11. Dangerous.mp3', img:'images/11.-catpng.png'}

];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);



// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 10;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proximo').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 10) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});


// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
     let campoMinutos = Math.floor(segundos / 60);
     let campoSegundos = segundos % 60;
     if (campoSegundos < 10){
         campoSegundos = '0' +  campoSegundos;
         
     }

     return campoMinutos+ ':' +campoSegundos;
}



let container = document.getElementById("wrapper");

//object of the games

//IMPORTANT!!
//the arrays of the imgs have an specific order depending on ther indeces:
//index 0 = the image used in the principal page
//and the rest of the indeces will be used for the bootstrap carrousel

let games = [
{
    game_name: "Typing Game",
    imgs: ["img/1.png", "../resources/imgs_typing/img1.jpeg", "../resources/imgs_typing/img2.jpeg", "../resources/imgs_typing/img3.jpeg"],
    controls: "Teclado",
    dev: "Richard Arizandieta",
    language: "Español",
    game_desc: "En este emocionante reto, tendrás la oportunidad de escribir distintas citas extraídas de los libros más destacados del aclamado escritor guatemalteco, Miguel Ángel Asturias. Deberás ser veloz y preciso en la escritura, prestando especial atención a la puntuación y evitando cualquier tipo de error que pudiera interferir con tu desempeño.",
    gen: "Escritura",
    game_id: 0,
    link: "../typing_test/index.html"
},
{
    game_name: "Puzzle",
    imgs: ["img/2.png", "../resources/imgs_puzzle/img1.jpeg", "../resources/imgs_puzzle/img2.jpeg", "../resources/imgs_puzzle/img3.jpeg"],
    controls: "Mouse",
    dev: "Samuel Guzman",
    language: "Español",
    game_desc: "En este desafío, tendrás la oportunidad de armar un puzzle inspirado en las obras del reconocido escritor guatemalteco. Con cada pieza encajada, descubrirás fragmentos de la riqueza literaria de Asturias, sus personajes icónicos y los escenarios que cobran vida en sus páginas. Con destreza y paciencia, deberás unir las piezas para revelar la imagen completa y desvelar el mensaje que el puzzle esconde.",
    gen: "Lógica",
    game_id: 1,
    link: "../puzzle/index.html"
},
{
    game_name: "Quiz",
    imgs: ["img/3.png", "../resources/imgs_quiz/img1.jpeg", "../resources/imgs_quiz/img2.jpeg", "../resources/imgs_quiz/img3.jpeg"],
    controls: "Mouse",
    dev: "Gerson Girón",
    language: "Español",
    game_desc: "En este quiz, te enfrentarás a una serie de preguntas que abarcan desde sus obras más emblemáticas hasta detalles de su biografía. Cada pregunta te llevará a adentrarte en los misterios de sus novelas, los personajes que cobran vida en sus páginas y los temas que aborda con maestría. Demuestra tu conocimiento sobre este autor magistral y desafía tu memoria literaria. Con cada respuesta correcta, te adentrarás en un fascinante viaje a través del legado literario de Asturias.",
    gen: "Quiz",
    game_id: 2,
    link: "../quiz/index.html"
},

{
    game_name: "Memoria",
    imgs: ["img/4.png", "../resources/imgs_memory/img1.jpeg", "../resources/imgs_memory/img2.jpeg"],
    controls: "Mouse",
    dev: "Juan Ordoñez",
    language: "Español",
    game_desc: "En este desafío, se te presentarán una serie de cartas boca abajo, cada una con una imagen representativa de sus obras y personajes inolvidables. Tu objetivo será voltear las cartas y encontrar las parejas correspondientes, recordando su ubicación en el tablero. A medida que desvelas las imágenes, revivirás momentos emblemáticos de sus novelas y te conectarás con la esencia de su escritura. La concentración y agudeza serán tus aliados para superar cada nivel y completar el juego de memoria.",
    gen: "Lógica",
    game_id: 3,
    link: "../memory-game/index.html"
}
];


//iterating over the array making a card for each element
games.forEach(e => container.innerHTML += `
<div class="card cardz" style="width: 18rem; " id="">
    <img src="${e.imgs[0]}" class="card-img-top" style="padding: 10px; height: 250px">
    <div class="card-body">
      <h5 class="card-title" style="text-align: center"><b>${e.game_name}</b></h5>
      <a href="game_info/index.html" class="btn btn-primary center" style="background: linear-gradient(90deg,rgba(248,73,27,1) 0%,rgba(241,47,63,1) 50%,rgba(220,24,96,1) 100%) !important; padding: 9px 0px; border-radius: 5px; color: white; font-size: 16px; border: none;" onclick="gameadd(${e.game_id})">Más información</a>
    </div>
</div>`);


//a function to set the game id and the index of the game (object) into the local storage
function gameadd(s){

    localStorage.setItem('game_id', s);
    localStorage.setItem('game_info', JSON.stringify(games[s]))
}s
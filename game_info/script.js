

//getting the elements from the local storage
let game_id = localStorage.getItem('game_id');
//parsing JSON 
let pre_arr = JSON.parse(localStorage.getItem('game_info'));


//getting items
let game_name  = document.getElementById("game_name");
let controls = document.getElementById("controls");
let dev = document.getElementById("dev");
let dev2 = document.getElementById("dev2");
let gen = document.getElementById("gen");
let btn = document.getElementById("btn");
let c = document.getElementById("carrousel-container");
let language = document.getElementById("language");
let game_desc = document.getElementById("game_desc");



game_name.innerHTML = pre_arr.game_name;
controls.innerHTML = pre_arr.controls;
dev.innerHTML = pre_arr.dev;
dev2.innerHTML = pre_arr.dev;
language.innerHTML = pre_arr.language;
game_desc.innerHTML = pre_arr.game_desc;
gen.innerHTML = pre_arr.gen;
btn.href = pre_arr.link;


//iterating over the imgs array (starting from index 1) and creating a carrousel item from each element.
for (let i = 1; i<pre_arr.imgs.length; i++){

    let usable = i == 1 ? " active" : "";
    c.innerHTML += `<div class="carousel-item${usable}">
    <img src="${pre_arr.imgs[i]}" class="d-block w-100" alt="...">
    </div>`
}



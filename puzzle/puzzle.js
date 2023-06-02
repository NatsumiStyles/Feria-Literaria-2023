//constantes - variables - Elementos de la UI
const title = document.getElementById("title");
const start = document.getElementById("start");
const index = document.getElementById("index");
const quiz = document.getElementById("quiz");
const nt = document.getElementById("nexttext");
const n = document.getElementById("next");

const ft = document.getElementById("finaltxt");
const fn = document.getElementById("finalIndex");
const fb = document.getElementById("finalbtn");

const question = document.getElementById("question");
const questionImg = document.getElementById("questionImg");
const choiceA = document.getElementById("a");
const choiceB = document.getElementById("b");
const choiceC = document.getElementById("c");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const scoreContainer = document.getElementById("scoreContainer");
const progress =  document.getElementById("progress");
let imgCorrect = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

let assignation = 0;

let using = ["img/"];//, "img2/", "img3/", "img4/", "img5/", "img6/"];

let currentpuzzle = 0;
    

let tile;



window.onload = function () {
    main();
}

    


function main(){


        for (let r=0; r < rows; r++) {
            
            for (let c=0; c < columns; c++) {
                
                
    
                tile = document.createElement("img");
            

                let thing = imgOrder.shift()
     
                tile.src = using[currentpuzzle] +  thing  + ".png";
                tile.id= thing;
    
        
                tile.addEventListener("dragstart", dragStart);  
                tile.addEventListener("dragover", dragOver);    
                tile.addEventListener("dragenter", dragEnter);  
                tile.addEventListener("dragleave", dragLeave);  
                tile.addEventListener("drop", dragDrop);        
                tile.addEventListener("dragend", dragEnd);      
    
                document.getElementById("board").append(tile);
               
                assignation++;

                tile.name = assignation;

            }
            
          
        }
        console.log(assignation);
}

   



//Variables Globales 


let runningQuestion = 0;
let count = 0;
const questionTime = 10; //10 segundos
const gaugeWith = 150; //150px
const gaugeUnit = gaugeWith / questionTime;
let TIMER;
let score = 0;
let rows = 3;
let columns = 3;
let currTile;
let otherTile; 
let turns = 0;
let imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];
let imgOrder2 = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];
     console.log(imgOrder);
let imgSolution = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];



const startQuiz = () =>{
    start.style.display="none";
    index.style.display="none";
    title.style.display  = "none";
    quiz.style.display = "block"


}

start.addEventListener("click",startQuiz);



const renderCounter = () =>{
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit+"px";
        count++
    }else{
        count = 0;
    // Indica progreso y coloca 'malo' (rojo)
    answerIsWrong();
    if(runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }else{
    // Finaliza el quiz y muestra el punteo
        clearInterval (TIMER);
        scoreRender();
    }
}
}







function dragStart() {
    currTile = this; 
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; 

}

function dragEnd() {
  

        
        let currImg = currTile.src;
        let otherImg = otherTile.src;
               
        let currImgid = currTile.id;
        let otherImgid = otherTile.id;

        let currImgassig = currTile.name;
        let otherImgassig = otherTile.name;

        console.log(currTile.id);
        console.log(otherTile.id);


        console.log("curr img index: " + (currImgassig-1) );
        console.log("otehr img index: " + (otherImgassig-1) );



        currTile.id = otherImgid;
        otherTile.id = currImgid;

        currTile.src = otherImg;
        otherTile.src = currImg;

        imgOrder2[parseInt(currImgassig)-1] =  otherImgid;

        imgOrder2[parseInt(otherImgassig)-1] =  currImgid;



    
        if(imgOrder2.toString() == imgSolution.toString()){
            console.log("Juan es un crack y gei");

            currentpuzzle++;

            if(currentpuzzle == using.length){  
                setTimeout( showFinalMenu , 750);
                return;
            }
           
           
            setTimeout( showMenu , 750);
        
        }

        console.log(imgOrder2);
        console.log(imgSolution)
     

        //codeveloped by Juan
      
        //FORKED BY NATSUWUMI

}



function showMenu(){
    n.style.display  = "block";
    nt.style.display  = "block";
    quiz.style.display = "none";

}

function returntoIndex(){
    window.location.href = "../Juegos.html";
    }

function showFinalMenu(){
    quiz.style.display = "none";
    ft.style.display = "block";
    fn.style.display = "block";
    fb.style.display = "block";

}



function nextpuzzle(){
    n.style.display  = "none";
    nt.style.display  = "none";
    quiz.style.display = "block";
    assignation = 0;
    imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];
    imgOrder2 = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];
    document.getElementById("board").innerHTML = "";
    main();
}


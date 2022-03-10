// variaveis bolinhas
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;

// variaveis raquetes
let xRaquete = 20;
let yRaquete = 150;
let xRaquete2 = 600-20;
let yRaquete2 = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// variaveis velocidades

let velocidadeX = 6;
let velocidadeY = 6;

// placar do jogo

let meusPontos = 0;
let pontosOponente = 0;

// sons do jogo 
let raquetada;
let ponto;
let trilha;

function preload() {
  trilha = loadSound("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3");
}

function setup(){
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  circle(xBolinha,yBolinha,diametro);
  tocaRaquetes();
  movimentaBolinha();
  movimentaRaquete();
  rect (xRaquete,yRaquete,raqueteComprimento,raqueteAltura);
  movimentaRaquete2();
  rect (xRaquete2,yRaquete2,raqueteComprimento,raqueteAltura);
  incluiPlacar();
  marcaPonto();
  
    
  
}
  
function limiteBolinha(){
  
  if ((xBolinha+(diametro/2) >= 600)|| (xBolinha-(diametro/2) <= 0)){
    velocidadeX =  velocidadeX * (-1);
    
  }  
  if ((yBolinha+(diametro/2) >= 400)||(yBolinha - (diametro/2) <=0)){
    velocidadeY = velocidadeY * (-1);
  }
}
  
 function movimentaBolinha (){
   limiteBolinha ();
   xBolinha += velocidadeX;
   yBolinha += velocidadeY;
 }
    
 function  mostraRaquete(){
   rect(xRaquete,yRaquete,raqueteComprimento,raqueteAltura);
   rect (xRaquete,yRaquete,raqueteComprimento,raqueteAltura);
 }
  
 function movimentaRaquete(){
   
   if (keyIsDown(UP_ARROW)){
     yRaquete -= 10;
   }
 

   if (keyIsDown(DOWN_ARROW)){
     yRaquete += 10;
   }
 }

function tocaRaquetes(){
    if((xBolinha-diametro/2 >=xRaquete)&&
       (xBolinha-diametro/2 <=xRaquete+raqueteComprimento)&&
       (yBolinha<=yRaquete+raqueteAltura)&&
       (yBolinha>=yRaquete)){
     velocidadeX *=-1;
      raquetada.play();
  }
    if((xBolinha+diametro/2>=xRaquete2)&&
       (xBolinha+diametro/2<=xRaquete2+raqueteComprimento)&&
       (yBolinha<=yRaquete2+raqueteAltura)&&
       (yBolinha>=yRaquete2)){
     velocidadeX *=-1;
      raquetada.play();
  }
}

function movimentaRaquete2(){
  if (keyIsDown(87)){
     yRaquete2 -= 10;
   }
 

   if (keyIsDown(83)){
     yRaquete2 += 10;
   }
 }

function incluiPlacar(){
  stroke (255);
  textAlign(CENTER);
  textSize (16);
  fill (color (255,140,0))
  rect (150,10,40,20)
  fill (255);
  text (meusPontos,170,26);
  fill (color (255,140,0));
  rect (450,10,40,20);
  fill (255);
  text (pontosOponente,470,26)
  
  
  
}

function marcaPonto (){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  }
}


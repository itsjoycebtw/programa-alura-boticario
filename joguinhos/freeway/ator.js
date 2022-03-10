//código do ator

let xAtor = 85;
let yAtor = 390;
let colisao = false;
let meusPontos = 0;



function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    if(yAtor>=0){
      yAtor -= 3;   
    }
  }
  if (keyIsDown(DOWN_ARROW)){
    if(yAtor<=390){
    yAtor += 3;
    }
  }
}

function verificaColisao (){

  for (let i = 0; i< imagemCarros.length; i++ ){
    colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarro,alturaCarro,xAtor,yAtor,15);
    
    if (colisao){
      colidiu()

    }
  }
}

function colidiu(){
  yAtor = 390;
  somColisao.play();
  if (pontosMaiorQueZero()){
        meusPontos -= 1;
  } 
}
  
function incluiPontos (){
  textAlign (CENTER);
  textSize (25);
  fill (color (255,240,60))
  text (meusPontos, width / 2,27);
}

function marcaPontos (){
  if (yAtor < 15 ){
    meusPontos += 1; 
    yAtor = 390; // volta  meu ator a posição inicial
    xAtor = random(0,500);
    somPonto.play();
  
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}
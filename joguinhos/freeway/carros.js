//código do carro

let xCarros = [600,600,600,600,600,600];
let yCarros = [40,100,155,220,275,335];
let velocidadeCarros = [2, 2.5, 3.2,5,3.3,2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro () {
  
  for (let i = 0; i < imagemCarros.length;i++ ){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro); 
  }
 
}

function movimentaCarro(){
  for ( let i = 0; i < imagemCarros.length; i++ ){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoCarro (){
  
  for ( let i = 0; i < imagemCarros.length; i++ )
  if (xCarros[i] < -50){
    xCarros[i] = 600
  }
}
  
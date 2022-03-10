function setup() {
  createCanvas(500, 420);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
  
}



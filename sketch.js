//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 15;
let raio = diametro /2;

//velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis do oponente
let xRaqueteOponente = 335;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(350,350);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  
function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro)
}

function movimentaBolinha() {
    xBolinha += velocidadexBolinha;
    yBolinha += velocidadeyBolinha;
}
  
function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadexBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeyBolinha *= -1;  }
}
  
 function mostraRaquete (){
   rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
 } 
  
  function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)){
      yRaquete -= 10;}
    }
  if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;}
    }

function verificaColisaoRaquete () {
  if (xBolinha -raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {velocidadexBolinha *= -1}
}

function colisaoMinhaRaqueteBiblioteca() {
  colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadexBolinha *= -1; }
}

function mostraRaqueteOponente() {
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);}

function movimentaRaqueteOponente() {
velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
yRaqueteOponente += velocidadeYOponente
}

function verificaColisaoRaquete() {
    colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadexBolinha *= -1;
    }
}
function incluiPlacar() {
    fill(255);
    text(meusPontos, 150, 26);
    text(pontosDoOponente, 200, 26);
}
function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
    }
}

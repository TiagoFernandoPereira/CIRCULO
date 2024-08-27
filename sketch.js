//bolinha 1
let posicaoXbolinha=300 //define a posicao x da bolinha
let posicaoYbolinha=300 //define a posicao y da bolinha
let diametro=20 // tamanho da bolinha
let cor // cor da bolinha
//bolinha 2
let posicaoXbolinha2=150 //define a posicao x da bolinha2
let posicaoYbolinha2=150 //define a posicao y da bolinha2
let diametro2=20 // tamanho da bolinha2
let cor2 // cor da bolinha2
function setup() {
  createCanvas(600,600);
  background(225);
  cor=color(random(0,255),random(0,255),random(0,255))
  cor2=color(random(0,255),random(0,255),random(0,255))
}

function draw() {
  fill(cor)
  circle(posicaoXbolinha,posicaoYbolinha,diametro)
  fill(cor2)
  circle(posicaoXbolinha2,posicaoYbolinha2,diametro2)
  //posicaoXbolinha=posicaoXbolinha+1
  //posicaoYbolinha=posicaoYbolinha+1
  diametro=diametro+1
  diametro2=diametro2+1
  if(mouseIsPressed){
    cor=color(random(0,255),random(0,255),random(0,255))
    cor2=color(random(0,255),random(0,255),random(0,255))
    diametro=0
    diametro2=0
  }

}
var box = 1;
var boxA = 0;
let posicaoY = 0;
let pontos = 0;
var numeroAleatorio;
var componete;

function BoxTrocar(){
    posicaoY = 0;
    boxA = box;
    do{
        numeroAleatorio = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    }while(numeroAleatorio == box);
    box = numeroAleatorio;

    componete = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    document.getElementById("box0" + box).style.backgroundImage = "url(img/componente0" + componete +".png)";
}

function BoxCair(){
    if(posicaoY < 400){
        posicaoY += 2;
    }
    if(posicaoY >= 400){
        BoxTrocar();
    }
    else if(box == 1 && posicaoY == 370 && posicaoX > 0 && posicaoX < 100
        || box == 2 && posicaoY == 370 && posicaoX > 69 && posicaoX < 200
        || box == 3 && posicaoY == 370 && posicaoX > 169 && posicaoX < 300
        || box == 4 && posicaoY == 370 && posicaoX > 269 && posicaoX < 400
        || box == 5 && posicaoY == 370 && posicaoX > 369 && posicaoX < 500){
        BoxTrocar();
        pontos++;
        document.getElementById("pontos").innerText = "pontos: " + pontos;
    }
    if(posicaoY == 0){
        document.getElementById("box0" + boxA).style.top = "0px";
        document.getElementById("box0" + boxA).style.backgroundImage = "url(img/sumi.png)";
    }
    document.getElementById("box0" + box).style.top = posicaoY + "px";
    setTimeout(BoxCair, 8);
}
BoxCair();
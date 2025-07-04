var esquerda = document.getElementById("esquerda");
var direita = document.getElementById("direita");
var player = document.getElementById("player");
let posicaoX = 230;
var botao = null;

esquerda.addEventListener("mousedown", ()=>{
    esquerda.style.backgroundColor = "rgb(122, 121, 121)";
    botao = esquerda;
    player.style.transform = "scaleX(-1)";
});
direita.addEventListener("mousedown", ()=>{
    botao = direita;
    direita.style.backgroundColor = "rgb(122, 121, 121)";
    player.style.transform = "scaleX(1)";
});
document.body.addEventListener("mouseup", ()=>{
    if(botao != null){
        botao.style.backgroundColor = "rgb(146, 145, 145)";
    }
    botao = null;
});

setInterval(()=>{
    if(botao == esquerda && posicaoX > 10){
        posicaoX -= 2;
        player.style.left = posicaoX + "px";
    }
    else if(botao == direita && posicaoX < 460){
        posicaoX += 2;
        player.style.left = posicaoX + "px";
    }
}, 10);

var sprit = 0;
setInterval(()=>{
    if(botao == esquerda || botao == direita){
        sprit++;
        if(sprit == 3){
            sprit = 1;
        }
    }
    else{
        sprit = 0;
    }
    player.style.backgroundImage = "url(img/player0"+ sprit +".png)";
}, 200);
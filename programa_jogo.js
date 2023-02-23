//CONFIGURAÇÃO DO JOGO
let canvas = document.getElementById("tela");
let ctx = tela.getContext("2d");

let intervalo = 50




function limpaTela(){
    ctx.clearRect(0, 0, map_largura_tela, map_altura_tela);
}




function desenhaMapa(){
    ctx.drawImage(
        mapa, 
        cameraX,
        cameraY,
        map_largura_tela,
        map_altura_tela,
        0,
        0,
        map_largura_tela,
        map_altura_tela
    )
}







// VARIAVEIS DO ZUMBI
let ZombieAndarX = 1310;
let ZombieAndarY = 100;
let direcaoZombie = 0;
let estadoZombie = 0;

function DesenhaZombie(){
    const ZombieImagem = new Image();
    ZombieImagem.src = "zombieCalvo.png";

    ctx.drawImage(
        ZombieImagem,
        64 * estadoZombie,
        64 * direcaoZombie,
        60,
        60,
        ZombieAndarX- cameraX,
        ZombieAndarY - cameraY,
        64,
        60


    )


}



function atualizaZombie(){
    
    if(ZombieAndarY <= 170   && ZombieAndarX == 1310){
        ZombieAndarY ++// andando para baixo
        direcaoZombie = 2;
    
    }else if (ZombieAndarY == 171 && ZombieAndarX <= 1410 ){// quando chegar no Y 200 olha para a direita

        direcaoZombie = 3;
        ZombieAndarX++// andando para direita
        

    }else if ((ZombieAndarY >= 100)&&(ZombieAndarX >=1411)){
        direcaoZombie =0 ;
        ZombieAndarY--;
        
    }
    else if(ZombieAndarY == 99 && ZombieAndarX >= 1310){
    direcaoZombie = 1;
    ZombieAndarX--;
   
}


    estadoZombie++;
    if (estadoZombie == 9) {
        estadoZombie = 0;
    }

}

function NPC(){
    const claudio = new Image();
    claudio.src = "claudio.png";
    ctx.drawImage(
        claudio,
        8,
        0,
        31,
        68,
        1200-cameraX,
        1928-cameraY,
        30,
        59
        //ctx.drawImage(
    /*1º -> img, 
    2º -> X Onde começa o corte,
    3º -> Y onde começa o corte,
    4º -> Largura do corte,
    5º -> Altura corte,
    6º -> coord.X onde colocar na tela,
    7º -> coord.Y onde colocar no canvas,
    8º -> zoom na largura , zoom altura) */
       
    ); 
}



function desenhaPersonagem(posicao_personagem){
    ctx.drawImage(
        personagemPrincipal,
        estado * largura,
        direcao * altura,
        largura,
        altura,
        posicao_personagem,
        posicao_personagem,
        largura,
        altura
       
    ); 
    
}





function atualizaPersonagem(tiles_horizontal, step, posicao_personagem){

    let prox_linha = Math.floor((cameraY + posicao_personagem)/32)   //Y
    let prox_coluna = Math.floor((cameraX + posicao_personagem)/32) //X

    if (direcao == 3) { //w
        prox_linha = Math.floor((cameraY + posicao_personagem - step)/32)
    }
    if (direcao == 1) { //a
        prox_coluna = Math.floor((cameraX + posicao_personagem - step)/32)
    }
    if (direcao == 0) { //s 
        prox_linha = Math.floor((cameraY + posicao_personagem + step)/32)
    }   
    if (direcao == 2) { //d
        prox_coluna = Math.floor((cameraX + posicao_personagem + step)/32)
    }


    if (colisao[prox_linha*tiles_horizontal+prox_coluna]){
        return;
    }

    if (direcao == 3) { //w
        cameraY -= step;
    }
    if (direcao == 1) { //a
        cameraX -= step;
    }
    if (direcao == 0) { //s 
        cameraY += step;
    }   
    if (direcao == 2) { //d
        cameraX += step;
    }
    
    //ANIMAÇÃO DO BONECO
    estado++;
    if (estado == 3) {
        estado = 0;
    }
}
let ultimaDirecao;
function movimentoBoneco(event) {
    switch (event.key) {        
        case 'w':            
            direcao = 3;
            
            
            break;
        case 'a':
            direcao = 1;
            
           
            break;
        case 's':
            direcao = 0;
            
           
            break;
        case 'd':
            direcao = 2;
            
            
            break;
        case ' ': 
           direcao = 7;
            
            

            break;
    }
}


function draw() {
    limpaTela();
    desenhaMapa();
    desenhaPersonagem(map_posicao_personagem);
    atualizaPersonagem(num_tiles_horizontal, map_step, map_posicao_personagem);
    NPC();
    DesenhaZombie();
    atualizaZombie();
    
    
  
}




//RUN THE GAME
let rungame = setInterval(draw, intervalo)
document.addEventListener('keydown', movimentoBoneco)
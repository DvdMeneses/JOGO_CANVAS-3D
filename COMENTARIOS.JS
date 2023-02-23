//METAS CONCLUIDAS
/* 
1 - boneco andar
2 - tela acompanhar
3 - temos a historia
4 - mapa no canvas
5 - ADCIONAR COLISÃO 
6 - MOVIMENTAÇÃO DOS VILÕES 

METAS QUE FALTA CONCLUIR

- CONCLUIR O MAPA

- ADCIONAR NPC
- ADICIONAR COMBATE

- OPCIONAL
    ARCO E FLECHA
*/

 
    // top left coords
    
    //ctx.drawImage(
    /*1º -> img, 
    2º -> X Onde começa o corte,
    3º -> Y onde começa o corte,
    4º -> Largura do corte,
    5º -> Altura corte,
    6º -> coord.X onde colocar na tela,
    7º -> coord.Y onde colocar no canvas,
    8º -> zoom na largura , zoom altura) */


    /* CODIGO DE FOGO ANIMADO
function Fogo(){
    const Fogo = new Image();
    Fogo.src = "CampFireFinished.png";
   
    
    ctx.drawImage(
        Fogo, 
        64 * EstadoFogo,
        17,
        80,
        80,
        230-cameraX,
        114-cameraY,
        80,
        80
    )
    function DesenhaZombie(){
        const zombie = new image();
        mapa.src = "zombie7.png";
        ctx.drawImage(
        ZombieImagem,
        65* estado,
        10*3,
        80,
        80,
        230-cameraX,
        114-cameraY,
        80,
        80

    );

    EstadoFogo++;
    if (EstadoFogo == 3) {
        EstadoFogo = 0;
    }
    
}
*/
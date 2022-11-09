const div = document.querySelector("#div");
let area = [];
let array = [];
let comeco;

window.onload = function(){
    comeco = true;
    let square;
    for(let s = 0; s < 9; s++ ) {
        square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("onclick",`jogar(${s})`);
        div.appendChild(square);
      
    let random;
    let contador;
    let loop = true;
    while(loop){
        random = Math.floor(Math.random()*9);
        contador = 0;
        for( let x = 0; x < 9; x++ ) {
            if(array[x] == random){
                contador++;
                break;
            }
        }

        if(contador == 0){
            if(random == 0 ){
                array[s] = "";
                square.innerText = array[s];
            }else{
                array[s] = random;
                square.innerText = array[s];
            }
            loop = false;
        }
    }
        area.push(square);
    }
}




const jogar = function( pos ){
    
    if( comeco == true ) {
        switch( pos ){
            case 0:
                if(array[1] == ""){
                    array[1] = array[pos];
                    area[1].innerText = array[1];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }else if(array[3] == ""){
                    array[3] = array[pos];
                    area[3].innerText = array[3];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }
            break;
            case 1:
                if(array[0] == ""){
                    array[0] = array[pos];
                    area[0].innerText = array[0];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }else if(array[2] == ""){
                    array[2] = array[pos];
                    area[2].innerText = array[2];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }else if(array[4] == ""){
                    array[4] = array[pos];
                    area[4].innerText = array[4];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }
            break;
            case 2:
                if(array[1] == ""){
                    array[1] = array[pos];
                    area[1].innerText = array[1];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }else if(array[5] == ""){
                    array[5] = array[pos];
                    area[5].innerText = array[5];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }
            break;
            case 3:
                if(array[0] == ""){
                    array[0] = array[pos];
                    area[0].innerText = array[0];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }else if(array[4] == ""){
                    array[4] = array[pos];
                    area[4].innerText = array[4];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }else if(array[6] == ""){
                    array[6] = array[pos];
                    area[6].innerText = array[6];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }
            break;
            case 4:
                if(array[3] == ""){
                    array[3] = array[pos];
                    area[3].innerText = array[3];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }else if(array[5] == ""){
                    array[5] = array[pos];
                    area[5].innerText = array[5];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }else if(array[1] == ""){
                    array[1] = array[pos];
                    area[1].innerText = array[1];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }else if(array[7] == ""){
                    array[7] = array[pos];
                    area[7].innerText = array[7];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }
            break;
            case 5:
                if(array[2] == ""){
                    array[2] = array[pos];
                    area[2].innerText = array[2];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }else if(array[4] == ""){
                    array[4] = array[pos];
                    area[4].innerText = array[4];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }else if(array[8] == ""){
                    array[8] = array[pos];
                    area[8].innerText = array[8];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }
            break;
            case 6:
                if(array[3] == ""){
                    array[3] = array[pos];
                    area[3].innerText = array[3];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }else if(array[7] == ""){
                    array[7] = array[pos];
                    area[7].innerText = array[7];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }
            break;
            case 7:
                if(array[8] == ""){
                    array[8] = array[pos];
                    area[8].innerText = array[8];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }else if(array[4] == ""){
                    array[4] = array[pos];
                    area[4].innerText = array[4];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }else if(array[6] == ""){
                    array[6] = array[pos];
                    area[6].innerText = array[6];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }
            break;
            case 8:
                if(array[7] == ""){
                    array[7] = array[pos];
                    area[7].innerText = array[7];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }else if(array[5] == ""){
                    array[5] = array[pos];
                    area[5].innerText = array[5];
                    array[pos] = "";
                    area[pos].innerText = array[pos];
                }
            break;
        }
    }
    ganhar();

} 

const ganhar = function() {
    
    let comecoFim = [
        "1","2","3",
        "4","5","6",
        "7","8","9"
    ];

    let c = false;
    if(comecoFim.length != fim.length){
        return false;
    }

    let contador = 0;
    for(let i = 0; i < comecoFim.length; i++ ) {
        if(comecoFim[i] != fim[i]){
            contador++;
            break;
        }
    }

    if(contador == 0){
        c = true;
    }

    if(c){
        comeco = false;
        alert("Voce venceu");
    }

}



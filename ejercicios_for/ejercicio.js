function listarNumeros(){
    for (let i = 0; i < 3; i++) {
        console.log(i);        
    }
}

function ejcutar(nro){
    if(nro == 1){
        listarNumeros();
    }else if(nro==2){
        listarReversa();
    }else if(nro==3){
        listarPares();
    }else if(nro==4){
        listarImpares();
    }
    
}


function listarReversa(){
    for (let i = 3; i > 0; i--) {
        console.log(i);        
    }
}


function listarPares(){
    for (let i = 0; i < 10; i+=2) {
        console.log(i);
        
    }
}

function listarImpares(){
    for (let i = 1; i <= 7; i+=2) {
        console.log(i);
        
    }
}


function generarTablas(tabla){
    let cmpTblMultiplicar = document.getElementById("tblMultiplicar");
    let contenido = "";

    for (let i = 1; i <= 12; i++) {
        contenido = contenido + "<tr>"+"<td>"+ tabla +"×"+ i +"</td>"+"<td>"+ tabla*+i +"</td>"+"</tr>";                                   
    }
    cmpTblMultiplicar.innerHTML = contenido;  
}

function ejecutarGenerarTablas(){
    let cmptxtValor = document.getElementById("txtValor");
    let tabla = parseInt(cmptxtValor.value);

    generarTablas(tabla);
}


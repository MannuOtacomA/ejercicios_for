function crearTarjeta(valorDesde,valorHasta,valorSalto) {
    let contenido = "";
    let cmpTarjeta = document.getElementById("divtarjetas");

    for (let i = valorDesde; i <= valorHasta; i+=valorSalto) {
        contenido = contenido + "<div class='item'>" + i + "</div>";
    }

    cmpTarjeta.innerHTML = contenido;
}

function ejecutarCrearTarjeta(){
    let cmptxtDesde = document.getElementById("txtDesde");
    let valorDesde = parseInt(cmptxtDesde.value);

    let cmptxtHasta = document.getElementById("txtHasta");
    let valorHasta = parseInt(cmptxtHasta.value);

    let cmptxtSalto = document.getElementById("txtSalto");
    let valorSalto = parseInt(cmptxtSalto.value);

    crearTarjeta(valorDesde,valorHasta,valorSalto);
}


function crearTarjetaMofifcasdo(){
    let cmpTarjeta = document.getElementById("divtarjetas");
    return cmpTarjeta.innerHTML="<h1>Modificado...</h1>";
}

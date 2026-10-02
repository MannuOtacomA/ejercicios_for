

function aleatorios(){
    return Math.floor(Math.random() * 100) + 1
}

function generarAleatorios(){
    let arreglos = [];
    let cmpTxt = document.getElementById("txtValor");
    let valor = parseInt(cmpTxt.value);

    if (valor >= 5 && valor <=20) {
        for (let i = 0; i < valor; i++) {
           arreglos.push(aleatorios());
            console.log(i +" "+ arreglos[i]);            
        }
    }

    mostrarResultados(arreglos);
}

function mostrarResultados(arreglos) {
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr> <td>Nros</td> </tr>";
    let arregloNros;

    for (let i = 0; i < arreglos.length; i++) {
      arregloNros = arreglos[i];
      contenidoTabla += "<tr><td>";
      contenidoTabla += arregloNros;
      contenidoTabla += "</td></tr>" 
    }
    contenidoTabla += "</table>";                         
    cmpTabla.innerHTML = contenidoTabla;
}
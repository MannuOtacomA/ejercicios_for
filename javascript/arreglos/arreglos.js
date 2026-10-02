let edadesDerecho = [];
let edadesIzquierdo = [];

//usamos .push()

function agregarEdad() {
    let cmpTxt = document.getElementById("edad");
    let valorEdad = parseInt(cmpTxt.value);
    
    if (isNaN(valorEdad)) {
        alert("Ingresa un numero valido");
        return;
    }

    edadesIzquierdo.push(valorEdad);
    cmpTxt.value = ""; // Limpiar el input
    pintarArregloIzquierda();
}

function pintarArregloIzquierda() {
    let cmpTabla = document.getElementById("tablaIzquierda");
    let contenidoTabla = "<table border='1'>";
    
    for (let i = 0; i < edadesIzquierdo.length; i++) {
        contenidoTabla += "<tr>";
        contenidoTabla += "<td>" + edadesIzquierdo[i] + "</td>";
        contenidoTabla += '<td> <button class="btn-eliminar" onclick="eliminarIzquierdo(' + i + ')">Eliminar</button> </td>';
        contenidoTabla += '<td> <button class="btn-mover" onclick="moverHaciaDerecha(' + i + ')">➜</button> </td>';
        contenidoTabla += "</tr>";
    }
    contenidoTabla += "</table>";                         
    cmpTabla.innerHTML = contenidoTabla;
}

function eliminarIzquierdo(i) {
    edadesIzquierdo.splice(i, 1);    
    pintarArregloIzquierda();
}

function pintarArregloDerecho() {
    let cmpTabla = document.getElementById("tablaDerecha");
    let contenidoTabla = "<table border='1'>";
    
    for (let i = 0; i < edadesDerecho.length; i++) {
        contenidoTabla += "<tr>";
        contenidoTabla += "<td>" + edadesDerecho[i] + "</td>";
        contenidoTabla += '<td> <button class="btn-eliminar" onclick="eliminarDerecho(' + i + ')">Eliminar</button> </td>';
        
        contenidoTabla += '<td> <button class="btn-mover" onclick="moverHaciaIzquierda(' + i + ')">⬅</button> </td>';
        contenidoTabla += "</tr>";
    }
    contenidoTabla += "</table>";                         
    cmpTabla.innerHTML = contenidoTabla;
}

function eliminarDerecho(i) {
    edadesDerecho.splice(i, 1);    
    pintarArregloDerecho();
}

// Mover de Izquierda a Derecha
function moverHaciaDerecha(i) {
    // obtener valor
    let valorAMover = edadesIzquierdo[i];
    
    // agregar a arreglo derecho
    edadesDerecho.push(valorAMover);
    
    //eliminar arreglo izquierdo
    edadesIzquierdo.splice(i, 1);
    
    // repintar tablas 
    pintarArregloIzquierda();
    pintarArregloDerecho();
}

// mover de derecha a izquierda
function moverHaciaIzquierda(i) {
    // Obtener el valor
    let valorAMover = edadesDerecho[i];
    
    // Agregarlo al arreglo izquierdo
    edadesIzquierdo.push(valorAMover);
    
    // Eliminarlo del arreglo derecho 
    edadesDerecho.splice(i, 1);
    
    // Repintar  tablas
    pintarArregloIzquierda();
    pintarArregloDerecho();
}
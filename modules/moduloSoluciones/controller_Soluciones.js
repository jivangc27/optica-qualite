let indexSolucionSeleccionada;
let soluciones = [];

function loadTabla() {
    let contenido = "";
    soluciones.forEach(function (solucion) {
       let registro = 
               '<tr onclick = "selectSolucion(' + soluciones.indexOf(solucion) + ')";>' +
                    '<td>' + solucion.id + '</td>' +
                    '<td>' + solucion.nombre + '</td>' +
                    '<td>' + solucion.marca + '</td>' +
                    '<td>' + solucion.descripcion + '</td>' +
                    '<td>' + solucion.precioCompra + '</td>' +
                    '<td>' + solucion.precioVenta + '</td>' +
                    '<td>' + solucion.existencias + '</td>' +
                    '<td>' + solucion.estatus + '</td></tr>';
            contenido += registro;
    });
    document.getElementById("tblSoluciones").innerHTML = contenido;
}

fetch("data_Soluciones.json").then(response => {
   return response.json(); 
}).then(function (jsondata) {
   soluciones = jsondata;
   loadTabla();
});

function selectSolucion(index) {
    document.getElementById("txtId").value = soluciones[index].id;
    document.getElementById("txtNombre").value = soluciones[index].nombre;
    document.getElementById("txtMarca").value = soluciones[index].marca;
    document.getElementById("txtDescripcion").value = soluciones[index].descripcion;
    document.getElementById("txtPrecioCom").value = soluciones[index].precioCompra;
    document.getElementById("txtPrecioVen").value = soluciones[index].precioVenta;
    document.getElementById("txtExistencias").value = soluciones[index].existencias;
    document.getElementById("txtEstatus").value = soluciones[index].estatus;
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexSolucionSeleccionada = index;
}

function cleanSolucion() {
    document.getElementById("txtId").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtMarca").value = "";
    document.getElementById("txtDescripcion").value = "";
    document.getElementById("txtPrecioCom").value = "";
    document.getElementById("txtPrecioVen").value = "";
    document.getElementById("txtExistencias").value = "";
    document.getElementById("txtEstatus").value = "";
}

function addSolucion() {
    let id, nombre, marca, descripcion, precioCom, precioVen, existencias, estatus;
    
    id = document.getElementById("txtId").value;
    nombre = document.getElementById("txtNombre").value;
    marca = document.getElementById("txtMarca").value;
    descripcion = document.getElementById("txtDescripcion").value;
    precioCom = document.getElementById("txtPrecioCom").value;
    precioVen = document.getElementById("txtPrecioVen").value;
    existencias = document.getElementById("txtExistencias").value;
    estatus = "Activo";
    
    var solucion = {
        "id" : id,
        "nombre" : nombre,
        "marca" : marca,
        "descripcion" : descripcion,
        "precioCompra" : precioCom,
        "precioVenta" : precioVen,
        "existencias" : existencias,
        "estatus" : estatus
    };
    
    soluciones.push(solucion);
    cleanSolucion();
    loadTabla();
}

function deleteSolucion() {
    soluciones[indexSolucionSeleccionada].estatus = "Inactivo";
    loadTabla();
    cleanSolucion();
}

function updateSolucion() {
    let id, nombre, marca, descripcion, precioCom, precioVen, existencias, estatus;
    
    id = document.getElementById("txtId").value;
    nombre = document.getElementById("txtNombre").value;
    marca = document.getElementById("txtMarca").value;
    descripcion = document.getElementById("txtDescripcion").value;
    precioCom = document.getElementById("txtPrecioCom").value;
    precioVen = document.getElementById("txtPrecioVen").value;
    existencias = document.getElementById("txtExistencias").value;
    estatus = "Activo";
    
    var solucion = {
        "id" : id,
        "nombre" : nombre,
        "marca" : marca,
        "descripcion" : descripcion,
        "precioCompra" : precioCom,
        "precioVenta" : precioVen,
        "existencias" : existencias,
        "estatus" : estatus
    };
    
    soluciones[indexSolucionSeleccionada] = solucion;
    loadTabla();
    cleanSolucion();
}
let indexAccesorioSeleccionado;
let accesorios = [];

function loadTabla() {
    let contenido = "";
    accesorios.forEach(function (accesorio) {
       let registro =
           '<tr onclick="selectAccesorio(' + accesorios.indexOf(accesorio) + ');">' +
                '<td>' + accesorio.id + '</td>' +
                '<td>' + accesorio.nombre + '</td>' +
                '<td>' + accesorio.marca + '</td>' +
                '<td>' + accesorio.precioCom + '</td>' +
                '<td>' + accesorio.precioVen + '</td>' +
                '<td>' + accesorio.existencias + '</td>' +
                '<td>' + accesorio.estatus + '</td></tr>';
        contenido += registro;
    });
    document.getElementById("tblAccesorios").innerHTML = contenido;
}

fetch("data_Accesorios.json").then(response => {
    return response.json();
}).then(function(jsondata) {
    accesorios = jsondata;
    console.log(accesorios);
    loadTabla();
});

function selectAccesorio(index) {
    document.getElementById("txtId").value = accesorios[index].id;
    document.getElementById("txtNombre").value = accesorios[index].nombre;
    document.getElementById("txtMarca").value = accesorios[index].marca;
    document.getElementById("txtPrecioCom").value = accesorios[index].precioCom;
    document.getElementById("txtPrecioVen").value = accesorios[index].precioVen;
    document.getElementById("txtExistencias").value = accesorios[index].existencias;
    document.getElementById("txtEstatus").value = accesorios[index].estatus;
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexAccesorioSeleccionado = index;
}

function cleanAccesorio() {
    document.getElementById("txtId").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtMarca").value = "";
    document.getElementById("txtPrecioCom").value = "";
    document.getElementById("txtPrecioVen").value = "";
    document.getElementById("txtExistencias").value = "";
    document.getElementById("txtEstatus").value = "";
}

function addAccesorio() {
    let id, nombre, marca, precioCom, precioVen, existencias, estatus;
    
    id = document.getElementById("txtId").value;
    nombre = document.getElementById("txtNombre").value;
    marca = document.getElementById("txtMarca").value;
    precioCom = document.getElementById("txtPrecioCom").value;
    precioVen = document.getElementById("txtPrecioVen").value;
    existencias = document.getElementById("txtExistencias").value;
    estatus = "Activo";
    
    var accesorio = {
        "id" : id,
        "nombre" : nombre,
        "marca" : marca,
        "precioCom" : precioCom,
        "precioVen" : precioVen,
        "existencias" : existencias,
        "estatus" : estatus
    };
    
    accesorios.push(accesorio);
    cleanAccesorio();
    loadTabla();
}



function deleteAccesorio() {
    accesorios[indexAccesorioSeleccionado].estatus = "Inactivo";
    loadTabla();
    cleanAccesorio();
}

function updateAccesorio() {
    let id, nombre, marca, precioCom, precioVen, existencias, estatus;
    
    id = document.getElementById("txtId").value;
    nombre = document.getElementById("txtNombre").value;
    marca = document.getElementById("txtMarca").value;
    precioCom = document.getElementById("txtPrecioCom").value;
    precioVen = document.getElementById("txtPrecioVen").value;
    existencias = document.getElementById("txtExistencias").value;
    estatus = "Activo";
    
    var accesorio = {
        "id" : id,
        "nombre" : nombre,
        "marca" : marca,
        "precioCom" : precioCom,
        "precioVen" : precioVen,
        "existencias" : existencias,
        "estatus" : estatus
    };
    
    accesorios[indexAccesorioSeleccionado] = accesorio;
    loadTabla();
    cleanAccesorio();
}



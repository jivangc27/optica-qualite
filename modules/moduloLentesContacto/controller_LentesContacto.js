let indexLenteContactoSeleccionado;
let lentesContacto = [];

function loadTabla() {
    let contenido = "";
    lentesContacto.forEach(function (lenteContacto) {
        let registro =
                '<tr onclick = "selectLenteContacto(' + lentesContacto.indexOf(lenteContacto) + ')";>' +
                    '<td>' + lenteContacto.id + '</td>' +
                    '<td>' + lenteContacto.nombre + '</td>' +
                    '<td>' + lenteContacto.marca + '</td>' +
                    '<td>' + lenteContacto.precioCom + '</td>' +
                    '<td>' + lenteContacto.precioVen + '</td>' +
                    '<td>' + lenteContacto.queratometria + '</td>' +
                    '<td>' + lenteContacto.existencias + '</td>' +
                    '<td>' + lenteContacto.estatus + '</td></tr>';
            contenido += registro;
    });
    document.getElementById("tblLenteContacto").innerHTML = contenido;
}

fetch("data_LentesContacto.json").then(response => {
    return response.json();
}).then(function (jsondata) {
    lentesContacto = jsondata;
    loadTabla();
});

function selectLenteContacto(index) {
    document.getElementById("txtId").value = lentesContacto[index].id;
    document.getElementById("txtNombre").value = lentesContacto[index].nombre;
    document.getElementById("txtMarca").value = lentesContacto[index].marca;
    document.getElementById("txtPrecioCom").value = lentesContacto[index].precioCom;
    document.getElementById("txtPrecioVen").value = lentesContacto[index].precioVen;
    document.getElementById("txtQueratometria").value = lentesContacto[index].queratometria;
    document.getElementById("txtExistencias").value = lentesContacto[index].existencias;
    document.getElementById("txtEstatus").value = lentesContacto[index].estatus;
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexLenteContactoSeleccionado = index;
}

function cleanLenteContacto() {
    document.getElementById("txtId").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtMarca").value = "";
    document.getElementById("txtPrecioCom").value = "";
    document.getElementById("txtPrecioVen").value = "";
    document.getElementById("txtQueratometria").value = "";
    document.getElementById("txtExistencias").value = "";
    document.getElementById("txtEstatus").value = "";
}

function addLenteContacto() {
    let id, nombre, marca, precioCom, precioVen, existencias, estatus;
    
    id = document.getElementById("txtId").value;
    nombre = document.getElementById("txtNombre").value;
    marca = document.getElementById("txtMarca").value;
    precioCom = document.getElementById("txtPrecioCom").value;
    precioVen = document.getElementById("txtPrecioVen").value;
    queratometria = document.getElementById("txtQueratometria").value;
    existencias = document.getElementById("txtExistencias").value;
    estatus = "Activo";
    
    var lenteContacto = {
        "id" : id,
        "nombre" : nombre,
        "marca" : marca,
        "precioCom" : precioCom,
        "precioVen" : precioVen,
        "queratometria": queratometria,
        "existencias" : existencias,
        "estatus" : estatus
    };
    
    lentesContacto.push(lenteContacto);
    cleanLenteContacto();
    loadTabla();
}

function deleteLenteContacto() {
    lentesContacto[indexLenteContactoSeleccionado].estatus = "Inactivo";
    loadTabla();
    cleanLenteContacto();
}

function updateLenteContacto() {
    let id, nombre, marca, precioCom, precioVen, existencias, estatus;
    
    id = document.getElementById("txtId").value;
    nombre = document.getElementById("txtNombre").value;
    marca = document.getElementById("txtMarca").value;
    precioCom = document.getElementById("txtPrecioCom").value;
    precioVen = document.getElementById("txtPrecioVen").value;
    queratometria = document.getElementById("txtQueratometria").value;
    existencias = document.getElementById("txtExistencias").value;
    estatus = "Activo";
    
    var lenteContacto = {
        "id" : id,
        "nombre" : nombre,
        "marca" : marca,
        "precioCom" : precioCom,
        "precioVen" : precioVen,
        "queratometria": queratometria,
        "existencias" : existencias,
        "estatus" : estatus
    };
    
    lentesContacto[indexLenteContactoSeleccionado] = lenteContacto;
    loadTabla();
    cleanLenteContacto();
}
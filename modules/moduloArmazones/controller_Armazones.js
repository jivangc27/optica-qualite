let indexArmazonSeleccionado;
let armazones = [];
const id_imagen = document.getElementById("docFotografia");

function loadTabla() {
    let contenido = "";
    armazones.forEach(function (armazon) {
        let registro = 
            '<tr onclick="selectArmazon(' + armazones.indexOf(armazon) + ');">' +
                '<td>' + armazon.id + '</td>' +
                '<td><img src = "' + armazon.imagen + '"alt="" height="80px"></td>' +
                '<td>' + armazon.nombre + '</td>' +
                '<td>' + armazon.modelo + '</td>' +
                '<td>' + armazon.marca + '</td>' +
                '<td>' + armazon.color + '</td>' +
                '<td>' + armazon.descripcion + '</td>' +
                '<td>' + armazon.dimensiones + '</td>' +
                '<td>' + armazon.precioCompra + '</td>' +
                '<td>' + armazon.precioVenta + '</td>' +
                '<td>' + armazon.existencias + '</td>' +
                '<td>' + armazon.estatus + '</td></tr>';
        contenido += registro;
    });
    document.getElementById("tblArmazones").innerHTML = contenido;
}

fetch("data_Armazones.json")
        .then(response => {
        return response.json();
})
        .then(function(jsondata) {
        armazones = jsondata;
        loadTabla();
});

function selectArmazon(index) {
    document.getElementById("txtNombre").value = armazones[index].nombre;
    document.getElementById("txtImagen").value = armazones[index].imagen;
    id_imagen.setAttribute('src', armazones[index].imagen);
    document.getElementById("txtModelo").value = armazones[index].modelo;
    document.getElementById("txtMarca").value = armazones[index].marca;
    document.getElementById("txtColor").value = armazones[index].color;
    document.getElementById("txtDescripcion").value = armazones[index].descripcion;
    document.getElementById("txtDimensiones").value = armazones[index].dimensiones;
    document.getElementById("txtPrecioCom").value = armazones[index].precioCompra;
    document.getElementById("txtPrecioVen").value = armazones[index].precioVenta;
    document.getElementById("txtExistencias").value = armazones[index].existencias;
    document.getElementById("btnDelete").disabled = false;
    document.getElementById("btnAdd").disabled = true;
    indexArmazonSeleccionado = index;
}

function cleanArmazon() {
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtImagen").value = "";
    id_imagen.setAttribute('src', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHBwcHBwgHBwcHBwoHBwcHBw8ICQcKFREWFhUREx8YHSggGBoxJxMTITEhJSkrLi4uFx8zODM4NygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDB//EABkQAQEBAQEBAAAAAAAAAAAAAAARAVECEv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD10AAAAAAAAFBFFBBQAUgIRYQEFhAZFARGkBFEAAAAAAAAAAAAAAAAAVFAFAFFBFikBFixYDMI1CAzEjcSAzEjcQGUaQERpAZFQAAAFBAAAAAAAAAAUFAUUBTFAixVBIRqEBIRqEBmJGoAxEjcQGUaQGUaZBEVAQVAVAAAAAAAAAAVFwFMMUFxUxcBcXDFwFUxcAWCgkGgGYjQDCa1qaDKa1rOgzqNazoIioCIqAAAAAAAKIAAAqKCqiguLiYuA1i4mLgNYuJig0rKg0JQDU1UBNTRNBNTV1nQTU1WdBNRdQERUAAAABUAAAAABcQBrFxlQaxcZUGsaxhrAaVlaDSs1aDRWaUFEqUFZ0qAJomgmpq6mgiACIuoAAAAAAAAAAAogKrKgqoA2MqDeaM1aDVWsVaDVKzSg1UqUoLUqVKCoVAEEAQQAFBAAAAAAAAAAAAAAVWVBVZUGisqDVKzQGqVmgNUrNAUqVAVBAVBAVABUAAAAAAAAVAAAAAAUEVYTAZVqZxZnAYG5nFnnmAwOk88w+fPMBzHX588w+fPMByo6fPnmE88wHNHWeeYk88wHNHSZxJnAYG5iAyKAgAAAAKAgAAAAAAAKgCqgDSsqCqyoNDK0FpUAUqAAgAggAIAgAAAAAqAAAAAAAAAAAAqAKqAKqFBRAGhkBRAFQAEABAAAAAAAAAAAAAAVAAAAAAAAAFAAAAAAAAEAAAAAAAVAAAAAAAB/9k=')
    document.getElementById("txtModelo").value = "";
    document.getElementById("txtMarca").value = "";
    document.getElementById("txtColor").value = "";
    document.getElementById("txtDescripcion").value = "";
    document.getElementById("txtDimensiones").value = "";
    document.getElementById("txtPrecioCom").value = "";
    document.getElementById("txtPrecioVen").value = "";
    document.getElementById("txtExistencias").value = "";
    document.getElementById('btnAdd').disabled = false;
}

function addArmazon() {
    let  codigo, nombre, modelo, marca, color, descripcion, dimensiones, precioCompra, precioVenta, existencias, estatus, imagen;
   
    imagen = document.getElementById("txtImagen").value;
    nombre = document.getElementById("txtNombre").value;
    modelo = document.getElementById("txtModelo").value;
    marca = document.getElementById("txtMarca").value;
    color = document.getElementById("txtColor").value;
    descripcion = document.getElementById("txtDescripcion").value;
    dimensiones = document.getElementById("txtDimensiones").value;
    precioCompra = document.getElementById("txtPrecioCom").value;
    precioVenta = document.getElementById("txtPrecioVen").value;
    existencias = document.getElementById("txtExistencias").value;
    estatus = "Activo";
    
    var armazon = {
        "id" : codigo,
        "imagen" : imagen,
        "nombre" : nombre,
        "modelo" : modelo,
        "marca" : marca,
        "color" : color,
        "descripcion" : descripcion,
        "dimensiones" : dimensiones,
        "precioCompra" : precioCompra,
        "precioVenta" : precioVenta,
        "existencias" : existencias,
        "estatus" : estatus
    };
    
    armazones.push(armazon);
    cleanArmazon();
    loadTabla();
}

function deleteArmazon() {
    armazones[indexArmazonSeleccionado].estatus = "Inactivo";
    loadTabla();
    cleanArmazon();
}

function updateArmazon() {
    let  codigo, nombre, modelo, marca, color, descripcion, dimensiones, precioCompra, precioVenta, existencias, estatus, imagen;
   
    imagen = document.getElementById("txtImagen").value;
    nombre = document.getElementById("txtNombre").value;
    modelo = document.getElementById("txtModelo").value;
    marca = document.getElementById("txtMarca").value;
    color = document.getElementById("txtColor").value;
    descripcion = document.getElementById("txtDescripcion").value;
    dimensiones = document.getElementById("txtDimensiones").value;
    precioCompra = document.getElementById("txtPrecioCom").value;
    precioVenta = document.getElementById("txtPrecioVen").value;
    existencias = document.getElementById("txtExistencias").value;
    estatus = "Activo";
    
    var armazon = {
        "id" : codigo,
        "imagen" : imagen,
        "nombre" : nombre,
        "modelo" : modelo,
        "marca" : marca,
        "color" : color,
        "descripcion" : descripcion,
        "dimensiones" : dimensiones,
        "precioCompra" : precioCompra,
        "precioVenta" : precioVenta,
        "existencias" : existencias,
        "estatus" : estatus
    };
    
    armazones[indexArmazonSeleccionado] = armazon;
    loadTabla();
    cleanArmazon();
}
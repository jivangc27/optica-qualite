let indexClienteSeleccionado;
let clientes = [];

function loadTabla() {
    let contenido = "";
    clientes.forEach(function (cliente) {
        let registro = 
            '<tr onclick="selectCliente(' + clientes.indexOf(cliente) + ');">' +            
                '<td>' + cliente.NUC + '</td>' + 
                '<td>' + cliente.Nombre + '</td>' +
                '<td>' + cliente.ApellidoPat + '</td>' +
                '<td>' + cliente.ApellidoMat + '</td>' +
                '<td>' + cliente.Genero + '</td>' +
                '<td>' + cliente.RFC + '</td>' +
                '<td>' + cliente.NumeroMovil + '</td>' +
                '<td>' + cliente.NumeroCasa + '</td>' +
                '<td>' + cliente.CorreoElectronico + '</td>' +
                '<td>' + cliente.estatus + '</td></tr>';
        contenido += registro;        
    });
    document.getElementById("tblClientes").innerHTML = contenido;

}

fetch ("data_Clientes.json")
        .then(response => {
            return response.json();
})
        .then(function(jsondata) {
            clientes = jsondata;
            loadTabla();
});

function selectCliente(index) {
    document.getElementById("txtNUC").value = clientes[index].NUC;
    document.getElementById("txtNombre").value = clientes[index].Nombre;
    document.getElementById("txtApellidoPat").value = clientes[index].ApellidoPat;
    document.getElementById("txtApellidoMat").value = clientes[index].ApellidoMat;
    document.getElementById("txtGenero").value = clientes[index].Genero;
    document.getElementById("txtRFC").value = clientes[index].RFC;
    document.getElementById("txtTelefonoMov").value = clientes[index].NumeroMovil;
    document.getElementById("txtTelefonoCasa").value = clientes[index].NumeroCasa;
    document.getElementById("txtCorreo").value = clientes[index].CorreoElectronico;
    document.getElementById("txtEstatus").value = clientes[index].estatus;
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexClienteSeleccionado = index;
}

function cleanCliente() {
    document.getElementById("txtNUC").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellidoPat").value = "";
    document.getElementById("txtApellidoMat").value = "";
    document.getElementById("txtGenero").value = "";
    document.getElementById("txtRFC").value = "";
    document.getElementById("txtTelefonoMov").value = "";
    document.getElementById("txtTelefonoCasa").value = "";
    document.getElementById("txtCorreo").value =  "";
    document.getElementById("txtEstatus").value = "";
}

function addCliente() {
    let NUC, nombre, apellidoPat, apellidoMat, genero, RFC, numeroMovil, numeroCasa, correoElectronico, estatus, subApMat;
    
    nombre = document.getElementById("txtNombre").value;
    apellidoPat = document.getElementById("txtApellidoPat").value;
    apellidoMat = document.getElementById("txtApellidoMat").value;
    genero = document.getElementById("txtGenero").value;
    RFC = document.getElementById("txtRFC").value;
    numeroMovil = document.getElementById("txtTelefonoMov").value;
    numeroCasa = document.getElementById("txtTelefonoCasa").value;
    correoElectronico = document.getElementById("txtCorreo").value;
    estatus = "Activo";
    
    if (apellidoMat === "") {
        subApMat = "X";
    } else {
        subApMat =  apellidoMat.substring(0,1);
    }
    
    NUC = apellidoPat.substring(0,2).toUpperCase() + subApMat.toUpperCase() + Math.floor(Math.random() * 200);
    
    var cliente = {
        "NUC": NUC,
        "Nombre": nombre,
        "ApellidoPat": apellidoPat,
        "ApellidoMat": apellidoMat,
        "Genero": genero,
        "RFC": RFC,
        "NumeroMovil": numeroMovil,
        "NumeroCasa": numeroCasa,
        "CorreoElectronico": correoElectronico,
        "estatus": estatus
    };
    
    clientes.push(cliente);
    cleanCliente();
    loadTabla();
}

function deleteCliente() {
    clientes[indexClienteSeleccionado].estatus = "Inactivo";
    loadTabla();
    cleanCliente();
}

function updateCliente() {
    let NUC, nombre, apellidoPat, apellidoMat, genero, RFC, numeroMovil, numeroCasa, correoElectronico, estatus, subApMat;
    
    nombre = document.getElementById("txtNombre").value;
    apellidoPat = document.getElementById("txtApellidoPat").value;
    apellidoMat = document.getElementById("txtApellidoMat").value;
    genero = document.getElementById("txtGenero").value;
    RFC = document.getElementById("txtRFC").value;
    numeroMovil = document.getElementById("txtTelefonoMov").value;
    numeroCasa = document.getElementById("txtTelefonoCasa").value;
    correoElectronico = document.getElementById("txtCorreo").value;
    estatus = "Activo";
    
    if (apellidoMat === "") {
        subApMat = "X";
    } else {
        subApMat =  apellidoMat.substring(0,1);
    }
    
    NUC = apellidoPat.substring(0,2).toUpperCase() + subApMat.toUpperCase() + Math.floor(Math.random() * 200);
    
    var cliente = {
        "NUC": NUC,
        "Nombre": nombre,
        "ApellidoPat": apellidoPat,
        "ApellidoMat": apellidoMat,
        "Genero": genero,
        "RFC": RFC,
        "NumeroMovil": numeroMovil,
        "NumeroCasa": numeroCasa,
        "CorreoElectronico": correoElectronico,
        "estatus": estatus
    };
    
    clientes[indexClienteSeleccionado] = cliente;
    loadTabla();
    cleanCliente();
}
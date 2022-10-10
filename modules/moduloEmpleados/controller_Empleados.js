let indexEmpleadoSeleccionado;
let empleados = [];

function loadTabla() {
    let contenido = "";
    empleados.forEach(function (empleado) {
        let registro =
                '<tr onclick="selectEmpleado(' + empleados.indexOf(empleado) + ');">' +
                    '<td>' + empleado.NUE + '</td>' +
                    '<td>' + empleado.Nombre + '</td>' +
                    '<td>' + empleado.ApellidoPat + '</td>' +
                    '<td>' + empleado.ApellidoMat + '</td>' +
                    '<td>' + empleado.Genero + '</td>' +
                    '<td>' + empleado.RFC + '</td>' +
                    '<td>' + empleado.NumeroMovil + '</td>' +
                    '<td>' + empleado.NumeroCasa + '</td>' +
                    '<td>' + empleado.CorreoElectronico + '</td>' +
                    '<td>' + empleado.Usuario + '</td>' +
                    '<td>' + empleado.Contraseña + '</td>' +
                    '<td>' + empleado.Estatus + '</td></tr>';
            contenido += registro;
    });
    console.log(contenido);
    document.getElementById("tblEmpleados").innerHTML = contenido;
}

fetch ("data_Empleados.json")
        .then(response => {
            return response.json();
})
        .then(function(jsondata) {
            empleados = jsondata;
            console.log(empleados);
            loadTabla();
});

function selectEmpleado(index) {
    document.getElementById("txtNUE").value = empleados[index].NUE;
    document.getElementById("txtNombre").value = empleados[index].Nombre;
    document.getElementById("txtApellidoPat").value = empleados[index].ApellidoPat;
    document.getElementById("txtApellidoMat").value = empleados[index].ApellidoMat;
    document.getElementById("txtGenero").value = empleados[index].Genero;
    document.getElementById("txtRFC").value = empleados[index].RFC;
    document.getElementById("txtTelefonoMov").value = empleados[index].NumeroMovil;
    document.getElementById("txtTelefonoCasa").value = empleados[index].NumeroCasa;
    document.getElementById("txtCorreo").value = empleados[index].CorreoElectronico;
    document.getElementById("txtUsuario").value = empleados[index].Usuario;
    document.getElementById("txtContrasennia").value = empleados[index].Contraseña;
    document.getElementById("txtEstatus").value = empleados[index].Estatus;
    indexEmpleadoSeleccionado = index;
}

function cleanEmpleado() {
    document.getElementById("txtNUE").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellidoPat").value = "";
    document.getElementById("txtApellidoMat").value = "";
    document.getElementById("txtGenero").value = "";
    document.getElementById("txtRFC").value = "";
    document.getElementById("txtTelefonoMov").value = "";
    document.getElementById("txtTelefonoCasa").value = "";
    document.getElementById("txtCorreo").value = "";
    document.getElementById("txtUsuario").value = "";
    document.getElementById("txtContrasennia").value = "";
    document.getElementById("txtEstatus").value = "";
}

function addEmpleado() {
    let NUE, nombre, apellidoPat, apellidoMat, genero, RFC, telefonoMov, telefonoCasa, correo, usuario, contrasennia, estatus, subApMat;
    
    nombre = document.getElementById("txtNombre").value;
    apellidoPat = document.getElementById("txtApellidoPat").value;
    apellidoMat = document.getElementById("txtApellidoMat").value;
    genero = document.getElementById("txtGenero").value;
    RFC = document.getElementById("txtRFC").value;
    telefonoMov = document.getElementById("txtTelefonoMov").value;
    telefonoCasa = document.getElementById("txtTelefonoCasa").value;
    correo = document.getElementById("txtCorreo").value;
    usuario = document.getElementById("txtUsuario").value;
    contrasennia = document.getElementById("txtContrasennia").value;
    estatus = "Activo";
    
    if (apellidoMat === "") {
        subApMat = "X";
    } else {
        subApMat =  apellidoMat.substring(0,1);
    }
    
    NUC = apellidoPat.substring(0,2).toUpperCase() + subApMat.toUpperCase() + Math.floor(Math.random() * 200);
    
    var empleado = {
        "NUE": NUE,
        "Nombre": nombre,
        "ApellidoPat": apellidoPat,
        "ApellidoMat": apellidoMat,
        "Genero": genero,
        "RFC": RFC,
        "NumeroMovil": telefonoMov,
        "NumeroCasa": telefonoCasa,
        "CorreoElectronico": correo,
        "Usuario": usuario,
        "Contraseña": contrasennia,
        "Estatus": estatus
    };
    
    empleados.push(empleado);
    cleanEmpleado();
    loadTabla();
}

function deleteEmpleado() {
    empleados[indexEmpleadoSeleccionado].Estatus = "Inactivo";
    loadTabla();
    cleanEmpleado();
}

function updateEmpleado() {
    let NUE, nombre, apellidoPat, apellidoMat, genero, RFC, telefonoMov, telefonoCasa, correo, usuario, contrasennia, estatus, subApMat;
    
    nombre = document.getElementById("txtNombre").value;
    apellidoPat = document.getElementById("txtApellidoPat").value;
    apellidoMat = document.getElementById("txtApellidoMat").value;
    genero = document.getElementById("txtGenero").value;
    RFC = document.getElementById("txtRFC").value;
    telefonoMov = document.getElementById("txtTelefonoMov").value;
    telefonoCasa = document.getElementById("txtTelefonoCasa").value;
    correo = document.getElementById("txtCorreo").value;
    usuario = document.getElementById("txtUsuario").value;
    contrasennia = document.getElementById("txtContrasennia").value;
    estatus = "Activo";
        
    if (apellidoMat === "") {
        subApMat = "X";
    } else {
        subApMat =  apellidoMat.substring(0,1);
    }
    
    NUC = apellidoPat.substring(0,2).toUpperCase() + subApMat.toUpperCase() + Math.floor(Math.random() * 200);
    
    var empleado = {
        "NUE": NUE,
        "Nombre": nombre,
        "ApellidoPat": apellidoPat,
        "ApellidoMat": apellidoMat,
        "Genero": genero,
        "RFC": RFC,
        "NumeroMovil": telefonoMov,
        "NumeroCasa": telefonoCasa,
        "CorreoElectronico": correo,
        "Usuario": usuario,
        "Contraseña": contrasennia,
        "Estatus": estatus
    };
    
    empleados[indexEmpleadoSeleccionado] = empleado;
    loadTabla();
    cleanEmpleado();
}
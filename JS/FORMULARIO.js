

// almacenar todos los datos de los campos  en un array llamdo alldatos
var alldatos = [];

function guardardatos(){
    // validando llenado de campos
   validamos();

    //array captura datos formularios
     var datos = [];
    //captura datos campos y agregar a array
    datos.push(document.getElementById("numdoc").value);
    datos.push(document.getElementById("pnombre").value);
    datos.push(document.getElementById("papellido").value);
    datos.push(document.getElementById("direccion").value);
    datos.push(document.getElementById("correo").value);
    datos.push(document.getElementById("celular").value);
    datos.push(document.getElementById("eps").value);
    //datos.push(document.getElementById("fechaingreso").value);
    alldatos.push(datos);

    // convertimos el array en json para poder hacer iteracion dentro de la misma maquina es como un formato para leer arreglos
    varjson  = JSON.stringify(alldatos);
    //almacenar los datos en la base  de datos local
    localStorage.setItem("clinicajs",varjson);

//limpiar caja de texto de formulario admsion
    limpiarFormulario();

alert("Los datos del paciente han sido guardados con exito!")

}
// funcion consultar todos los datos

function consultar(){

    // tomar valores almacenados y se decodifica el array JSON
   campos = JSON.parse(localStorage.getItem("clinicajs"));

   for ( x = 0 ; x < campos.length; x++) {
      $("#estilotabla").append("<tr><td>"+campos[x][0]+"</td><td>"+campos[x][1]+"</td><td>"+campos[x][2]+"</td><td>"+campos[x][3]+"</td><td>"+campos[x][4]+"</td><td>"+campos[x][5]+"</td><td>"+campos[x][6]+"</td><td>"+campos[x][7]+"</td><td><button>Eliminar</button></td></tr>")
   }


}

function buscardoc(){

    campos = JSON.parse(localStorage.getItem("clinicajs"));

   

documento = [];
documento.push(document.getElementById("docu").value);



if (campos ["0"]["0"]==documento) {
    for ( x = 0 ; x < campos.length; x++) {
      $("#estilotabla").append("<tr><td>"+campos[x][0]+"</td><td>"+campos[x][1]+"</td><td>"+campos[x][2]+"</td><td>"+campos[x][3]+"</td><td>"+campos[x][4]+"</td><td>"+campos[x][5]+"</td><td>"+campos[x][6]+"</td><td>"+campos[x][7]+"</td><td><button>Eliminar</button></td></tr>")
   }

}


   }


// validacion de campos llenar campos obligatorios
   function validamos(){

    documento = $("#numdoc").val();
    pnombre = $("#pnombre").val();
    papellido = $("#papellido").val();
    direccion = $("#direccion").val();
    correo = $("#correo").val();
    celular = $("#celular").val();
    eps = $("#eps").val();


    if (documento.length <2) {
        alert("Ingrese un numero documento por favor.")
        return false;

    }

     if (pnombre.length <2) {
        alert("Ingrese un numero Nombre por favor.")
        return false;

    }

     if (papellido.length <2) {
        alert("Ingrese un numero Apellido por favor.")
        return false;

    }
     if (direccion.length <2) {
        alert("Ingrese un numero direccion por favor.")
        return false;

    }

     if (correo.length <2) {
        alert("Ingrese un numero correo por favor.")
        return false;

    }
     if (celular.length <2) {
        alert("Ingrese un numero celular por favor.")
        return false;

    }

     if (eps.length <2) {
        alert("Ingrese un numero nombre de eps por favor.")
        return false;

    }
    




   }


   function limpiarFormulario() {
    document.getElementById("admision").reset();
  }



     function Eliminar(i) {
        document.getElementsByTagName("table")[0].setAttribute("id", "tableid");
        document.getElementById("tableid").deleteRow(i);
    }







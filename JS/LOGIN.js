





function ingresar(){


	campos = JSON.parse(localStorage.getItem("clinicajs"));

   

 user = $('#input').val();
 pass = $('#input-contra').val();

 if (user === campos[0][1]) {
  if (pass == campos[0][0]) {
      document.location.assign('file:///C:/Users/JAIR%20DE%20JESUS/Desktop/CLINICA/PRINCIPAL.html')
  } else {
    alert("Contraseña incorrecta");
  }
} else {
  alert("Error 404");
}



//if (campos [0][1]==user) {
//	if (campos [0][0]==pass) {
 // alert('Ingreso Exitoso');
  

//} alert('usuario o contraseña incorrectos')

//} 

	//var dato = $('#input').val(); //esto linea fue todo lo que cambie
    //  alert(dato);
    


}


function validarlogin(){
	user = $('#input').val();
 pass = $('#input-contra').val();
	if (user.length>2) {

	alert('ingrese usuarios')
}




}
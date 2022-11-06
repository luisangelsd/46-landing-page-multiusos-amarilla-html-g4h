
// Este metodo valida si el formulario no esta vació
function validacionFormulario(){

  let respuesta=false;
  let nombre=document.getElementById('form_nombre').value;
  let correo=document.getElementById('form_correo').value;
  let telefono=document.getElementById('form_telefono').value;
  let mensaje=document.getElementById('form_mensaje').value;
  

    if(nombre!=""){
      if(correo !=""){
        if(telefono!=""){
          if (mensaje!="") {
                   
            }
        }
      }
 
  }

  return respuesta;

}



//Este metodo valida, prepara y envia la peticion al archivo "modelo.php" quien ejecutara el servicio.
function enviardatos(){


  // Obtenemos los datos de la vista y los guardamos en una variable llamada "datos"
  let nombre=document.getElementById('form_nombre').value;
  let correo=document.getElementById('form_correo').value;
  let telefono=document.getElementById('form_telefono').value;
  let mensaje=document.getElementById('form_mensaje').value;
  
  let datos=
  "nombre="+nombre+ 
  "&correo="+correo+
  "&telefono="+telefono+
  "&mensaje="+mensaje;




if (this.validacionFormulario()) {
 

      try {
          
            $.ajax({

                  url: "modelo.php", //Este es el servicio que envia la información a un correo electrónico
                  data:datos,        // Estos son los datos recolectados del formulario
                  method: "POST",    // Este es el metodo por el cual se enviara la petición

                  // Este se ejecutara antes de enviar la petición.
                  beforeSend: function(){
                    document.getElementById("respuestaMensaje").textContent="*Enviando...";

                  },

                   // Este se ejecutara si la petición se envio con exito: Una vez que todo haya salido bien, redireccionaremos al usuario a la url proporcionada
                  success: function(data){
                    let d1 = document.getElementById('btn_enviar');
                    d1.insertAdjacentHTML('afterend', '<meta http-equiv="refresh" content="0; url= https://demo.sandovalguicho.com/html/pagina-agradecimiento-ejemplo.html" />');
                    document.getElementById("mensajeRespuesta").textContent="Mensaje enviado con Exito";
                    
                  },

                   // Este se ejecutara si la petición tuvo algun error. Generalmente este error se debe a que no tienes apache instalado en tu hosting y/o que tu hosting no tenga un servicio de envio de correos electronicos.
                  error: function(data){
                      document.getElementById("respuestaMensaje").textContent="Error al enviar formulario";          
                  },

                  
                  // Este se ejecutara despues de que la petición se haya completado con y sin errores. Por defecto no contiene nada.
                  complete:function(data){
                   

                  }
            });

        //Este error se lanzara si ocurre un error dentro del codigo que tiene dentro.
      } catch (error) {
            document.getElementById("respuestaMensaje").textContent="Error al enviar formulario";
      
      }

   //Esto se ejecutara si el formulario no es valido
} else {
  document.getElementById("respuestaMensaje").textContent="*Rellena todos los comapos";

}
 
  

  


  


}









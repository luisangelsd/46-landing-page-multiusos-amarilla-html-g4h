

function validacionFormulario(){
  let nombre=document.getElementById('form_nombre').value;
  let correo=document.getElementById('form_correo').value;
  let telefono=document.getElementById('form_telefono').value;
  let interes=document.getElementById('form_interes').value;
  let hosting=document.getElementById('form_hosting').value;
  let mensaje=document.getElementById('form_mensaje').value;
  let respuesta=false;

  if(nombre!=""){
    
    if(correo !=""){
      if(telefono!=""){
        if(interes!=""){
          if(hosting!=""){
            if (mensaje!="") {
              respuesta=true;
            }
          }
        }

      }

    }
 
  }
  return respuesta;

}




function enviardatos(){
    



  let nombre=document.getElementById('form_nombre').value;
  let correo=document.getElementById('form_correo').value;
  let telefono=document.getElementById('form_telefono').value;
  let interes=document.getElementById('form_interes').value;
  let hosting=document.getElementById('form_hosting').value;
  let mensaje=document.getElementById('form_mensaje').value;
  let datos="nombre="+nombre+"&correo="+correo+"&telefono="+telefono+"&interes="+interes+"&hosting="+hosting+"mensaje="+mensaje;




if (this.validacionFormulario()) {
 

  try {
  
    $.ajax({

      url: "modelo.php",
      data:datos,
      method: "POST",
      beforeSend: function(){
        
  
       //   alert("Esta función se ejecuta durante el envió de la petición al servidor.");
         
      },
      complete:function(data){
       
     //     alert("Se ejecuta al termino de la petición");
         
      },
      success: function(data){
  
  
        let d1 = document.getElementById('btn_enviar');
        d1.insertAdjacentHTML('afterend', '<meta http-equiv="refresh" content="0;url=https://sandovalguicho.com/cotizar-sitio-web-gracias/" /> ');
        document.getElementById("mensajeRespuesta").textContent("");
         
      },
      error: function(data){
          document.getElementById("respuestaMensaje").textContent("Problemas al tratar de enviar el formulario");        
          
          
      }
  });

  function onSubmit(token) {
    document.getElementById("form1").submit();
  }

    
  } catch (error) {
        document.getElementById("respuestaMensaje").textContent="Error al solicitar el mensaje a enviar";
    //Este error sucede en el archivo controlador.js

  }



  
} else {

  document.getElementById("respuestaMensaje").textContent="*Rellena todos los datos";
  //Alerta el formulario esta incompleto
  
}
 
  

  


  


}









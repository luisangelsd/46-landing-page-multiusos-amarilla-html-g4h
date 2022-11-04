 <?php   


  $nombre =filter_input(INPUT_POST, 'nombre');
  $correo =filter_input(INPUT_POST,'correo');
  $telefono=filter_input(INPUT_POST,'telefono');
  $interes =filter_input(INPUT_POST,'interes');
  $hosting =filter_input(INPUT_POST,'hosting');
  $mensaje =filter_input(INPUT_POST,'mensaje');


  $mensaje_completo="Datos Recolectados:"."Nombre: ". $nombre. " Correo: ".$correo. "Telefono".$telefono. " Interes:".$interes. " Hosting:".$hosting." Mensaje:".$mensaje;

  $para="sandovalguichoo@gmail.com";
  $subject="Nuevo Mensaje Recibido";
  mail($para, $subject, $mensaje_completo);











<?php
session_start();
header("Access-Control-Allow-Origin: *");
include('conexion.php');
$connect = new Conexion ('localhost','root','','wallapop');

if(isset($_POST['EMAIL']) && !empty($_POST['EMAIL']) ||  isset($_POST['PASS']) && !empty($_POST['PASS'])){

    $query="select email , clave from datos_personales where email = '".$_REQUEST['EMAIL']."' and clave ='".$_POST['PASS']."'";
    $connect->consulta($query);
 
    if($reg= $connect->extraer_registro()){
 
   //EXISTE
    // echo "1";

    $query="select * from datos_personales where email = '".$_REQUEST['EMAIL']."' and clave ='".$_POST['PASS']."'";
    $connect->consulta($query);
   while($reg=$connect->extraer_registro()){

    echo "Nombre:".$reg['nombre']."Apellido".$reg['apellido']."email:".$reg['email']."clave:".$reg['clave'];
   }
    
    }
    else{
        //NO SE ENCUENTRA
     echo "0";
    }
 }
?>
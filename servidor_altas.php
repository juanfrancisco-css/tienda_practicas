<?php
header("Access-Control-Allow-Origin: *");
include('conexion.php');
$connect = new Conexion ('localhost','root','','wallapop');

if(isset($_POST['EMAIL']) && !empty($_POST['EMAIL']) ||  isset($_POST['PASS']) && !empty($_POST['PASS'])){
    $fecha_hoy = date("Y-m-d H:i:s"); 
    $query="select email , clave from datos_personales where email = '".$_REQUEST['EMAIL']."' and clave ='".$_POST['PASS']."'";
    $connect->consulta($query);
 
    if($reg= $connect->extraer_registro()){
 
   

    $query="select * from datos_personales where email = '".$_REQUEST['EMAIL']."' and clave ='".$_POST['PASS']."'";
    $connect->consulta($query);
   while($reg=$connect->extraer_registro()){
//YA EXISTE UN USUARIO CON ESOS DATOS
    echo "0";
   }
    
    }
    else{
//DAR DE ALTA
       
$query = "insert into datos_personales (nombre,apellido,email,clave,fecha_in,fecha_nac,estado) values
('".$_POST['NOMBRE']."','".$_POST['AP']."','".$_REQUEST['EMAIL']."','".$_POST['PASS']."','$hoy','".$_POST['FECHA_NAC']."','A')";
 $connect->consulta($query);
$query="insert into usuario (id_datos) (select id_datos  from datos_personales where email ='".$_POST['EMAIL']."');";
$connect->consulta($query);
$query="insert into cliente (id_usuario) (select id_usuario from usuario where id_datos in ( select id_datos from datos_personales where email ='".$_POST['EMAIL']."'));";
$connect->consulta($query);
    }
 }
?>
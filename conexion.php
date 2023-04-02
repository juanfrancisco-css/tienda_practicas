<?php


class Conexion{

    private $server;
    private $username;
    private $pass;
    private $database;
    private $link;
    private $result;


    function __construct($server,$username,$pass,$database){

        $this->server=$server;
        $this->username=$username;
        $this->pass=$pass;
        $this->database=$database;
        $this->conectar();

    }

    private function conectar(){

        $this->link = mysqli_connect( $this->server,$this->username,$this->pass, $this->database) or die("Fallo en la conexion");
    }

    public function consulta($query){

        $this->result= mysqli_query($this->link,$query) or die("Fallo con la query");
    }

    public function extraer_registro(){

        if($registro = mysqli_fetch_array( $this->result)){

            return $registro;
        }
        else {
            return false;
        }
    }
    public function __sleep(){
        mysqli_close($this->link);
    }
}
?>
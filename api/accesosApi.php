<?php 
require "../models/accesosModel.php";
 class AccesosApi
 {
    public function getAccesos()
    {
       $response = AccesosModel::getAccesosMdl("accesos");
       echo json_encode($response);
    }
     public function getAccesosModuloRol($idModulo_Rol)
     {
        $response = AccesosModel::getAccesosModuloRolMdl($idModulo_Rol, "accesos");
        echo json_encode($response);
     }

     public function saveAcceso($arrDatos)
     {
        $response = AccesosModel::saveAccesoMdl($arrDatos,"accesos");
        echo json_encode($response);
     }

     public function deleteAcceso($idAcceso)
     {
        $response = AccesosModel::deleteAccesoMdl($idAcceso,"accesos");
        echo $response != "success" ? $response : json_encode($response);
     }

 }
 
$request = json_decode(file_get_contents('php://input'), true);
// var_dump($request);
if(isset($request["getAccesos"])){

    $a = new AccesosApi ();
    $a -> getAccesos();
    // var_dump($request["getAccesos"]);

} else if (isset($request["getAccesosModuloRol"])){

    $a = new AccesosApi ();
    $a -> getAccesosModuloRol($request['getAccesosModuloRol']['idModulo_Rol']);
    // var_dump($request["getAccesos"]);

}  else if (isset($request["saveAcceso"])) {

    $c = new AccesosApi ();
    $c -> saveAcceso($request['saveAcceso']);

} else if (isset($request["deleteAcceso"])) {

    $c = new AccesosApi ();
    $c -> deleteAcceso($request['deleteAcceso']['idAcceso']);
    
}
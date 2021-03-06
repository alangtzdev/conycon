<?php
require_once "../include/config.php";
require_once "globlalFuncModel.php";
require_once "bitacoraModel.php";

class ConveniosModel extends Conexion
{

   public static function getConveniosMdl($table)
    {
        try {
           $instituciones = "instituciones";
           $catalogos = "catalogos";
            // $cxn = Conexion::conectar();
            $arrayResult = array();
            $stmt = Conexion::conectar()->prepare("SELECT idConvenio, c.nombre as nombre, c.descripcion as descripcion, fechaCreacion, 
            fechaFirma, fechaFin, isIndefinida, idFinEspecifico, idEstatus, idPrograma, idContraparte, idAmbito, idOrigen, 
            idTipoConvenio, idResponsable, idPais, financiamiento, isIntercambioEstudiantes, isIntercambioProfesores, 
            isAccesoBiblioteca, isEstServicioSocial , isDesarrolloProyectos, isCoedicionLibros,
             isCostosInstitucionales, isInformeAvance, encrypArchivo, rutaArchivo, i.nombre as contraparte, cat.nombre as tipoConvenio
              FROM $table as c
             LEFT JOIN $instituciones  as i on idInstitucion = c.idContraparte
             LEFT JOIN $catalogos as cat on idCatalogo = c.idTipoConvenio");
            $stmt->execute();

            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $arrayResult[] = array('idConvenio' => $row['idConvenio'],
                    'nombre' => $row['nombre'],
                    'descripcion' => $row['descripcion'],
                    'fechaCreacion' => $row['fechaCreacion'],
                    'fechaFirma' => $row['fechaFirma'] == null ? '' : $row['fechaFirma'],
                    'fechaFin' => $row['fechaFin']  == null ? '' : $row['fechaFin'],
                    'isIndefinida' => $row['isIndefinida'] == 0 ? false : true ,
                    'idFinEspecifico' => $row['idFinEspecifico'],
                    'idEstatus' => $row['idEstatus'],
                    'idPrograma' => $row['idPrograma'], 
                    'idContraparte' => $row['idContraparte'], 
                    'idAmbito' => $row['idAmbito'], 
                    'idOrigen' => $row['idOrigen'], 
                    'idTipoConvenio' => $row['idTipoConvenio'], 
                    'idResponsable' => $row['idResponsable'], 
                    'idPais' => $row['idPais'], 
                    'financiamiento' => $row['financiamiento'],
                    'isIntercambioEstudiantes' => $row['isIntercambioEstudiantes'] == 0 ? false : true,
                    'isIntercambioProfesores' => $row['isIntercambioProfesores'] == 0 ? false : true,
                    'isAccesoBiblioteca' => $row['isAccesoBiblioteca'] == 0 ? false : true,
                    'isEstServicioSocial' => $row['isEstServicioSocial'] == 0 ? false : true,
                    'isDesarrolloProyectos' => $row['isDesarrolloProyectos'] == 0 ? false : true,
                    'isCoedicionLibros' => $row['isCoedicionLibros'] == 0 ? false : true,
                    'isCostosInstitucionales' => $row['isCostosInstitucionales'] == 0 ? false : true,
                    'isInformeAvance' => $row['isInformeAvance'] == 0 ? false : true,
                    'encrypArchivo' => $row['encrypArchivo'] == null ? "" :  $row['encrypArchivo'],
                    'rutaArchivo' => $row['rutaArchivo'] == null ? "" :  $row['rutaArchivo'],
                    'contraparte' => $row['contraparte']  == null ? "Sin asignar" :  $row['contraparte'],
                    'tipoConvenio' => $row['tipoConvenio']  == null ? "Sin asignar" :  $row['tipoConvenio']             
                  );
            }
            
            return $arrayResult;

        } catch (Exception $th) {
            return $th->getMessage();
        }
    }

   public static function saveConvenioMdl($arrDatos,$table,$username)
   {
      try {
         $cxn = Conexion::conectar();
         $today = date("Y-m-d H:i:s");
         $isIndefinida = $arrDatos['isIndefinida'] == true ? 1 : 0;

         $fechaFirma = $arrDatos['fechaFirma'] != "" ? date("y-m-d", strtotime($arrDatos['fechaFirma'])) : null;
         $fechaFin = $arrDatos['fechaFin'] != "" ? ($arrDatos['isIndefinida'] == true ? null : date("y-m-d", strtotime($arrDatos['fechaFin']))) : null; 
         if ($arrDatos['HFCommandName'] == 'ALTA' && $arrDatos['idConvenio'] == "") {

             $stmt = $cxn->prepare("INSERT INTO $table (nombre, descripcion, fechaCreacion, fechaFirma, fechaFin,
             isIndefinida, idFinEspecifico, idEstatus, idPrograma, idContraparte, idAmbito, idOrigen, idTipoConvenio, 
             idResponsable, idPais, financiamiento, encrypArchivo, rutaArchivo, isIntercambioEstudiantes, 
             isIntercambioProfesores, isAccesoBiblioteca, isEstServicioSocial, isDesarrolloProyectos, 
             isCoedicionLibros, isCostosInstitucionales, isInformeAvance) 
             VALUES (:nombre, :descripcion, :fechaCreacion, :fechaFirma, :fechaFin, :isIndefinida, :idFinEspecifico, :idEstatus, :idPrograma, :idContraparte, 
             :idAmbito, :idOrigen, :idTipoConvenio, :idResponsable, :idPais, :financiamiento, :encrypArchivo, :rutaArchivo,
             :isIntercambioEstudiantes, :isIntercambioProfesores, :isAccesoBiblioteca, :isEstServicioSocial, 
             :isDesarrolloProyectos, :isCoedicionLibros, :isCostosInstitucionales, :isInformeAvance)");
            $stmt->bindParam(":nombre",$arrDatos['nombre'], PDO::PARAM_STR);
            $stmt->bindParam(":descripcion",$arrDatos['descripcion'], PDO::PARAM_STR);
            $stmt->bindParam(":financiamiento",$arrDatos['financiamiento']);
            $stmt->bindParam(":fechaCreacion",$today, PDO::PARAM_STR);
            $stmt->bindParam(":fechaFirma",$fechaFirma); 
            $stmt->bindParam(":fechaFin",$fechaFin);
            $stmt->bindParam(":isIndefinida",$isIndefinida);
            $stmt->bindParam(":idFinEspecifico",$arrDatos['idFinEspecifico']);
            $stmt->bindParam(":idEstatus",$arrDatos['idEstatus']);
            $stmt->bindParam(":idPrograma",$arrDatos['idPrograma']);
            $stmt->bindParam(":idContraparte",$arrDatos['idContraparte']);
            $stmt->bindParam(":idAmbito",$arrDatos['idAmbito']);
            $stmt->bindParam(":idOrigen",$arrDatos['idOrigen']);
            $stmt->bindParam(":idTipoConvenio",$arrDatos['idTipoConvenio']);
            $stmt->bindParam(":idResponsable",$arrDatos['idResponsable']);
            $stmt->bindParam(":idPais",$arrDatos['idPais']);
            $stmt->bindParam(":encrypArchivo", $arrDatos['encrypArchivo'], PDO::PARAM_STR);
            $stmt->bindParam(":rutaArchivo",$arrDatos['rutaArchivo'], PDO::PARAM_STR);
            $stmt->bindParam(":isIntercambioEstudiantes",$arrDatos['isIntercambioEstudiantes']);
            $stmt->bindParam(":isIntercambioProfesores",$arrDatos['isIntercambioProfesores']);
            $stmt->bindParam(":isAccesoBiblioteca",$arrDatos['isAccesoBiblioteca']);
            $stmt->bindParam(":isEstServicioSocial",$arrDatos['isEstServicioSocial']);
            $stmt->bindParam(":isDesarrolloProyectos",$arrDatos['isDesarrolloProyectos']);
            $stmt->bindParam(":isCoedicionLibros",$arrDatos['isCoedicionLibros']);
            $stmt->bindParam(":isCostosInstitucionales",$arrDatos['isCostosInstitucionales']);
            $stmt->bindParam(":isInformeAvance",$arrDatos['isInformeAvance']);
            

            if ($stmt->execute()) {
               BitacoraModel::saveTransaccion($username, $table, $arrDatos['HFCommandName'], $arrDatos['nombre']);
               // var_dump($response);
               return "success";
            
           } else {
               return "Error";
           }

           $stmt = null;

         } else if ($arrDatos['HFCommandName'] == 'EDITAR' && $arrDatos['idConvenio'] != ""){
            // var_dump($arrDatos['idConvenio'],$arrDatos);
            $stmt = $cxn->prepare("UPDATE  $table SET nombre = :nombre, descripcion = :descripcion, fechaCreacion = :fechaCreacion, 
            fechaFirma = :fechaFirma, fechaFin = :fechaFin, isIndefinida = :isIndefinida, idFinEspecifico = :idFinEspecifico, 
            idEstatus = :idEstatus,  idPrograma = :idPrograma, idContraparte = :idContraparte, idAmbito = :idAmbito, 
            idOrigen = :idOrigen, idTipoConvenio = :idTipoConvenio, idResponsable = :idResponsable, idPais = :idPais, 
            financiamiento = :financiamiento, encrypArchivo = :encrypArchivo, rutaArchivo = :rutaArchivo, isIntercambioEstudiantes = :isIntercambioEstudiantes,
            isIntercambioProfesores = :isIntercambioProfesores, isAccesoBiblioteca = :isAccesoBiblioteca, isEstServicioSocial = :isEstServicioSocial, 
            isDesarrolloProyectos = :isDesarrolloProyectos, isCoedicionLibros = :isCoedicionLibros, isCostosInstitucionales = :isCostosInstitucionales, 
            isInformeAvance = :isInformeAvance
            WHERE idconvenio = :idConvenio");

            $stmt->bindParam(":idConvenio", $arrDatos['idConvenio']);
            $stmt->bindParam(":nombre",$arrDatos['nombre'], PDO::PARAM_STR);
            $stmt->bindParam(":descripcion",$arrDatos['descripcion'], PDO::PARAM_STR);
            $stmt->bindParam(":financiamiento",$arrDatos['financiamiento']);
            $stmt->bindParam(":fechaCreacion",$today, PDO::PARAM_STR);
            $stmt->bindParam(":fechaFirma",$fechaFirma); 
            $stmt->bindParam(":fechaFin",$fechaFin);
            $stmt->bindParam(":isIndefinida",$isIndefinida);
            $stmt->bindParam(":idFinEspecifico",$arrDatos['idFinEspecifico']);
            $stmt->bindParam(":idEstatus",$arrDatos['idEstatus']);
            $stmt->bindParam(":idPrograma",$arrDatos['idPrograma']);
            $stmt->bindParam(":idContraparte",$arrDatos['idContraparte']);
            $stmt->bindParam(":idAmbito",$arrDatos['idAmbito']);
            $stmt->bindParam(":idOrigen",$arrDatos['idOrigen']);
            $stmt->bindParam(":idTipoConvenio",$arrDatos['idTipoConvenio']);
            $stmt->bindParam(":idResponsable",$arrDatos['idResponsable']);
            $stmt->bindParam(":idPais",$arrDatos['idPais']);
            $stmt->bindParam(":encrypArchivo", $arrDatos['encrypArchivo'], PDO::PARAM_STR);
            $stmt->bindParam(":rutaArchivo",$arrDatos['rutaArchivo'], PDO::PARAM_STR);
            $stmt->bindParam(":isIntercambioEstudiantes",$arrDatos['isIntercambioEstudiantes']);
            $stmt->bindParam(":isIntercambioProfesores",$arrDatos['isIntercambioProfesores']);
            $stmt->bindParam(":isAccesoBiblioteca",$arrDatos['isAccesoBiblioteca']);
            $stmt->bindParam(":isEstServicioSocial",$arrDatos['isEstServicioSocial']);
            $stmt->bindParam(":isDesarrolloProyectos",$arrDatos['isDesarrolloProyectos']);
            $stmt->bindParam(":isCoedicionLibros",$arrDatos['isCoedicionLibros']);
            $stmt->bindParam(":isCostosInstitucionales",$arrDatos['isCostosInstitucionales']);
            $stmt->bindParam(":isInformeAvance",$arrDatos['isInformeAvance']);
            
            if ($stmt->execute()) {
               BitacoraModel::saveTransaccion($username, $table, $arrDatos['HFCommandName'], $arrDatos['idConvenio']);
                return "success";
            } else {
                return "Hubo un error al editar el convenio ".$arrDatos['nombre'];
            }
            $stmt->close();
         } else {
            return "Hubo un problema: " + $arrDatos['HFCommandName'] + ", " + $arrDatos['idConvenio'];
         }
      } catch (Exception $th) {
         return $th->getMessage();
      }
   }

   public static function deleteConvenioMdl($idConvenio,$table,$username)
   {
      try {
         $cxn = Conexion::conectar();
         $stmt = $cxn->prepare("DELETE FROM $table WHERE idconvenio = :id");
         $stmt->bindParam(":id", $idConvenio, PDO::PARAM_INT);
         if($stmt->execute()){
            BitacoraModel::saveTransaccion($username, $table, "ELIMINAR", $idConvenio);
            return "success";
         }
         else{
            return "No se pudo eliminar el convenio";
         }
         $stmt->close();
      } catch (Throwable $th) {
         return $th->getMessage();
      }
      
   }
   
   public static function getAreasUsuario($idUsuario,$table)
   {
      try {
         $cxn = Conexion::conectar();
         $jsonArray = array();
         $stmt = $cxn->prepare("SELECT id, nombreArea FROM areas WHERE id IN (SELECT id_area FROM $table WHERE id_usuario = :id)");
         $stmt->bindParam(":id",$idUsuario, PDO::PARAM_INT);
         $stmt->execute();
         while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $jsonArray[] = array('idArea' => $row['id'],
         'nombreArea' => $row['nombreArea']);
         }
         $jsonParse = GlobalFunctModel::utf8Size($jsonArray);
         return $jsonParse;
        } catch (Exception $th) {
        die($th->getMessage());
      }
   }

   
   /**----------------------------**/

   public static function getCategoriasArea($idArea,$table)
   {
      try {
         $cxn = Conexion::conectar();
         $jsonArray = array();
         $stmt = $cxn->prepare("SELECT id, nombreCategoria, descripcion FROM $table WHERE id_area = :id");
         $stmt->bindParam(":id",$idArea, PDO::PARAM_INT);
         $stmt->execute();
         if ($stmt->rowCount() > 0) { 
            // var_dump(count($stmt->fetchAll()));
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
               $jsonArray[] = array('id' => $row['id'],
            'nombreCategoria' => $row['nombreCategoria']);
            }
            return $jsonArray;
         } else {
            throw new Exception("No se encuentran categorias para esta Area");
         }
        
      } catch (Throwable $th) {
         return $th->getMessage();
      }
   }
   
   // public function subirConvenio($nombreEncriptado,$ruta,$table)
   // {
   //    try {
   //       $pdo = Conexion::conectar();
   //        $stmt = $pdo->prepare("INSERT INTO $table(encrypConvenio, rutaConvenio) VALUES (:encrypNomConvenio, :ruta)");
   //        $stmt->bindParam(":encrypNomConvenio",$nombreEncriptado, PDO::PARAM_STR);
   //        $stmt->bindParam(":ruta",$ruta, PDO::PARAM_STR);
   //        if($stmt->execute()) {
   //          $id = $pdo->lastInsertId();
   //          return intval($id);
   //        } else{
   //          return "Error no se pudo guardar el archivo";   
   //        }
   //       $stmt->close();
   //    } catch (Exception $th) {
   //       //throw $th;
   //    }
   // }
}
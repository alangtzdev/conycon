<?php 
    include 'include/header.php';
    include 'include/top-menu.php'; 
    include 'include/left-menu.php'; 
?>
<!-- <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.css"> -->
<link rel="stylesheet" href="assets/plugins/datatable/jquery.dataTables.min.css">
<!-- <link href="assets/plugins/bootstrap-fileinput/bootstrap-fileinput.css" rel="stylesheet" type="text/css"> -->

<!-- BEGIN CONTENT -->
<!-- <div class="pusher"> -->
<div id="app" class="ui basic segment">
    <!-- El Contenido comienza aqui -->
    <div class="ui container" id="idDivBody">
        <h2 class="ui dividing header ui">Convenios</h2>
        <div class="example">
            <div class="ui right floated main menu">
                <button id="btnNuevo" class="ui primary button" data-command="ALTA" disabled><i class="fa fa-plus"></i>
                    Nuevo convenio
                </button>
            </div>
        </div>
        <div class="main ui container">
            <div class="ui hidden divider"></div>
            <div class="ui hidden divider"></div>
            <div class="ui hidden divider"></div>
            <div class="ui hidden divider"></div>
            <table id="tableConvenios" class="table display responsive dt-responsive celled" cellspacing="0">
                <!-- class="table table-striped table-hover dt-responsive table-condensed display compact" cellspacing="0"> -->
                <thead class="table-title">
                    <tr>
                        <th>Convenio</th>
                        <th>Contraparte</th>
                        <th>Fecha firma</th>
                        <th>Fecha vigencia</th>
                        <th>Tipo</th>
                        <th>Archivo</th>
                        <th class="no-sort">Editar</th>
                        <th class="no-sort">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        <div class="exmaple">
            <div class="ui modal" id="mdAltaEdicion">
                <i class="close icon"></i>
                <div class="ui red header" id="txtTitle">
                </div>
                <div class="content">
                    <!-- <div class="ui piled segment"> -->
                    <form class="ui form" id="formConvenios">
                        <div class="field">
                            <div class="fields">
                                <div class="eight wide field">
                                    <label>Convenio</label>
                                    <select id="idFinEspecificoMd" class="ui dropdown" name="dropdown">
                                        <option value="">Selecciona...</option>
                                    </select>
                                </div>
                                <div class="eight wide field">
                                    <label>Estatus</label>
                                    <select id="idCondicionMd" class="ui dropdown" name="dropdown">
                                        <option value="">Selecciona...</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="fields">
                                <div class="six wide field ">
                                    <label>Nombre</label>
                                    <input type="text" id="txtNombre" name="name"
                                        placeholder="Nombre / instrumento juridico">
                                </div>
                                <div class="ten wide field">
                                    <label>Objeto</label>
                                    <textarea rows="1" id="txtDescripcion" name="descripcion"
                                        placeholder="Descripcion"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="fields">
                                <div class="six wide field"><label>Fecha firma</label>
                                    <div class="ui calendar" id="divFechaFirma">
                                        <div class="ui input left icon">
                                            <i class="calendar icon"></i>
                                            <input id="fechaFirma" type="text" placeholder="Date">
                                        </div>
                                    </div>
                                </div>
                                <div class="four wide field"><label>Vigencia indefinida</label>
                                    <div class="ui checkbox">
                                        <label></label>
                                        <input id="chkIndefinida" type="checkbox" name="checkbox">
                                        <label>SI</label>
                                    </div>
                                </div>
                                <div class="six wide field"><label>Fecha vigencia</label>
                                    <div class="ui calendar" id="divFechaFin">
                                        <div class="ui input left icon">
                                            <i class="calendar icon"></i>
                                            <input id="fechaFin" type="text" placeholder="Date">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="fields">
                                <div class="four wide field">
                                    <label>Programa</label>
                                    <select id="idProgramaMd" class="ui dropdown" name="dropdown">
                                        <option value="">Selecciona...</option>
                                    </select>
                                </div>
                                <div class="eight wide field">
                                    <label>Contraparte</label>
                                    <select id="idContraparteMd" class="ui search dropdown" name="dropdown">
                                        <option value="">Selecciona...</option>
                                    </select>
                                </div>
                                <div class="four wide field">
                                    <label>Ambito</label>
                                    <select id="idAmbitoMd" class="ui dropdown" name="dropdown">
                                        <option value="">Selecciona...</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="fields">
                                <div class="four wide field">
                                    <label for="">Origen</label>
                                    <select name="" id="idOrigenMd" class="ui dropdown">
                                        <option value="">Selecciona...</option>
                                    </select>
                                </div>
                                <div class="four wide field">
                                    <label for="">Tipo de convenio</label>
                                    <select name="" id="idTipoConvenioMd" class="ui dropdown">
                                        <option value="">Selecciona...</option>
                                    </select>
                                </div>
                                <div class="eight wide field">
                                    <label for="">Responsable</label>
                                    <select name="" id="idResponsableMd" class="ui search dropdown">
                                        <option value="">Selecciona...</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="fields">
                                <div class="eight wide field">
                                    <label>Financiamiento</label>
                                    <input type="text" id="txtFinaciamiento" name="financiamiento" placeholder="">
                                </div>
                                <div class="eight wide field">
                                    <label for="">Pais</label>
                                    <select name="" id="idPaisMd" class="ui search dropdown">
                                        <option value="">Selecciona...</option>
                                    </select>
                                    <!-- <label for="">Pais</label>
                                    <div class="ui fluid search selection dropdown">
                                        <input type="hidden" name="country">
                                        <i class="dropdown icon"></i>
                                        <div class="default text">Select Country</div>
                                        <div class="menu">
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <h4 class="ui dividing header blue">Subir archivo</h4>
                        <div class="field">
                            <div class="fields">
                                <div class="eleven wide field" id="divArchivoNuevo">
                                    <div class="ui labeled input">
                                        <div class="ui olive label">
                                            Archivo
                                            <!-- <span class="fileinput-exists"> Cambiar </span> -->
                                        </div>
                                        <!-- <input id="idArchivo" type="file" name="archivoNuevo" data-file="archivoNew" data-idprogress="#archivoResult" data-divresult="#lblResult"> -->

                                        <button type="button" data-archivone="idArchivo" id="subirArchivo"
                                            onclick="subir('idArchivo')">Escoger archivo</button>
                                        <input type="file" id="idArchivo" name="archivoNuevo" data-file="archivoNew"
                                            data-idprogress="#archivoResult" data-idlblresult="#glosaArchivos"
                                            style="display: none">
                                        <span id="glosaArchivos">Ningun archivo seleccionado</span>
                                    </div>
                                    <div class="ui indicating progress" data-value="0" id="archivoResult">
                                        <div class="bar">
                                            <div id="progressArchivo" class="progress"></div>
                                        </div>
                                        <!-- <div class="label" id="lblResult" ></div> -->
                                    </div>
                                </div>
                                <div class="eleven wide field" id="divArchivoConsul">
                                    <a target="_blank" id="aArchivoRef" href="" type="button"
                                        class="ui teal icon button" /><i class="fa fa-file"></i></a>
                                    <label for="" id="lblArchivoRef"></label>
                                </div>
                            </div>
                        </div>
                        <h4 class="ui dividing header blue">Compromisos</h4>
                        <div class="field">
                            <div class="fields">
                                <div class="four wide field"><label>Intercambio estudiante</label>
                                    <div class="ui fitted checkbox">
                                        <!-- <label></label> -->
                                        <input type="checkbox" name="checkbox" id="chkInterEst">
                                        <label>SI</label>
                                    </div>
                                </div>
                                <div class="four wide field"><label>Intercambio profesores</label>
                                    <div class="ui fitted checkbox">
                                        <!-- <label></label> -->
                                        <input type="checkbox" name="checkbox" id="chkInterProfe">
                                        <label></label>
                                    </div>
                                </div>
                                <div class="four wide field"><label>Acceso biblioteca</label>
                                    <div class="ui fitted checkbox">
                                        <!-- <label></label> -->
                                        <input type="checkbox" name="checkbox" id="chkAccessBiblio">
                                        <label></label>
                                    </div>
                                </div>
                                <div class="four wide field"><label>Servicio social estudiantes</label>
                                    <div class="ui fitted checkbox">
                                        <!-- <label></label> -->
                                        <input type="checkbox" name="checkbox" id="chkSerSocial">
                                        <label></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="fields">
                                <div class="four wide field"><label>Desarrollo de proyectos</label>
                                    <div class="ui fitted checkbox">
                                        <!-- <label></label> -->
                                        <input type="checkbox" name="checkbox" id="chkDesProy">
                                        <label>SI</label>
                                    </div>
                                </div>
                                <div class="four wide field"><label>Coedición de libros</label>
                                    <div class="ui fitted checkbox">
                                        <!-- <label></label> -->
                                        <input type="checkbox" name="checkbox" id="chkCoeLibros">
                                        <label></label>
                                    </div>
                                </div>
                                <div class="four wide field"><label>Costos institucionales</label>
                                    <div class="ui fitted checkbox">
                                        <!-- <label></label> -->
                                        <input type="checkbox" name="checkbox" id="chkCostosInst">
                                        <label></label>
                                    </div>
                                </div>
                                <div class="four wide field"><label>Informes de avance</label>
                                    <div class="ui fitted checkbox">
                                        <!-- <label></label> -->
                                        <input type="checkbox" name="checkbox" id="chkInformesAvance">
                                        <label></label>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div class="ui error message"></div>
                    </form>
                    <!-- </div> -->
                </div>
                <div class="actions">
                    <div class="ui cancel red button">
                        cancelar
                    </div>
                    <button id="btnGuardar" type="submit" class="ui ok green right button">
                        Guardar
                    </button>
                    <!-- <div class="ui submit green inverted button">Guardar</div> -->
                </div>

            </div>
        </div>
        <div class="ui orange toast" id="domtoastactions">
            <div class="content">
                <div class="ui header">ELIMINAR</div>
                Seguro que deseas eliminar este registro?
            </div>
            <div class="left basic actions">
                <button class="ui positive button">Yes</button>
                <button class="ui negative button cancel">No</button>
            </div>
        </div>
        <input type='hidden' name='HFCommandName' id="HFCommandName" value="" />
        <input type='hidden' name='HFIdConvenio' id="HFIdConvenio" value="" />
        <input type='hidden' name='HFEncrypArchivo' id="HFEncrypArchivo" value="" />
        <input type='hidden' name='HFRutaArchivo' id="HFRutaArchivo" value="" />

    </div>
    <!-- El Contenido termina aqui -->
</div>
<!-- </div> -->
<!-- End pusher -->
<!-- END CONTENT -->

<?php include "include/footer.php"; ?>
<script src="assets/plugins/datatable/jquery.dataTables.min.js"></script>
<!-- <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.js"></script> -->
<!-- <script src="assets/plugins/bootstrap-fileinput/bootstrap-fileinput.js" type="text/javascript"></script> -->
<script src="assets/plugins/jquery.ui.widget.js"></script>
<script src="assets/plugins/fileUpload/jquery.fileupload.js"></script>
<script src="assets/js/p-convenios.js"></script>
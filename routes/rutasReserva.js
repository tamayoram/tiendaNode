
// Activar la funcionalidad router de express. Permite crear rutas modulares. 
const{Router}=require('express');

// Importar los controladores

const {buscarReservas}=require('../controllers/controladorReservas.js');
const {buscarReserva}=require('../controllers/controladorReservas.js');
const {agregarReserva}=require('../controllers/controladorReservas.js');
const {editarReserva}=require('../controllers/controladorReservas.js');
const {eliminarReserva}=require('../controllers/controladorReservas.js');

const{validarPeticion}=require('../validations/validaciones.js');
const {check}=require('express-validator');

let validaciones=Array(

    check('nombre','Verificar la información, es un campo obligatorio').not().isEmpty(),
    check('apellido','Verificar la información, es un campo obligatorio').not().isEmpty(),
    check('telefono','Verificar la información, es un campo obligatorio').not().isEmpty(),
    check('fechaInicio','Verificar la información, es un campo obligatorio').not().isEmpty(),
    check('fechaFinal','Verificar la información, es un campo obligatorio').not().isEmpty(),
    check('cantidadPersona','Verificar la información, es un campo obligatorio').not().isEmpty(),
    check('tipo','Verificar la información, es un campo obligatorio').not().isEmpty(),
    validarPeticion

);

const rutas=Router();

rutas.get('/reservas',buscarReservas);
rutas.get('/reserva/:id',buscarReserva);
rutas.post('/reserva/nueva',validaciones,agregarReserva);
rutas.put('/reserva/editar/:id',editarReserva);
rutas.delete('/reserva/eliminar/:id',eliminarReserva);

module.exports=rutas;




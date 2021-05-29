// Importar desde express las variables request y response

const{request,response}=require('express');

const ReservaModelo=require('../models/reservaModelo.js');

async function buscarReservas(peticion=request,respuesta=response){

    let consultaReservas=await ReservaModelo.find();

    respuesta.json({
        estado:true,
        mensaje:consultaReservas
    });


}


async function buscarReserva(peticion=request,respuesta=response){

let id=peticion.params.id;
    
let consultaReserva=await ReservaModelo.findById(id);

respuesta.json({
    estado:true,
    mensaje:consultaReserva
});


}


async function agregarReserva(peticion=request,respuesta=response){

    let datosReserva=peticion.body;  
    let reserva=new ReservaModelo(datosReserva);
    await reserva.save();
    
    
    respuesta.json({
        estado:true,
        mensaje:'Reserva agregada exitosamente',
        datos:reserva
    });

    
}


async function editarReserva(peticion=request,respuesta=response){

    let id=peticion.params.id;
    let datosReserva=peticion.body; 

    await ReservaModelo.findByIdAndUpdate(id,datosReserva);

    respuesta.json({
        estado:true,
        mensaje:'Reserva actualizada exitosamente'
    });

    
}


async function eliminarReserva(peticion=request,respuesta=response){

    let id=peticion.params.id;
    
    await ReservaModelo.findByIdAndDelete(id);


    respuesta.json({
        estado:true,
        mensaje:'Reserva eliminada exitosamente'
    });

    
}

// exportar funciones del modulo controlador

module.exports={

    buscarReservas,
    buscarReserva,
    agregarReserva,
    editarReserva,
    eliminarReserva


}
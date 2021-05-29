const {model,Schema}=require('mongoose');
const { number } = require('yargs');

const ReservaEsquema=Schema({

    nombre:{

        type:String,
        required:true
    },

    apellido:{

        type:String,
        required:true
    },

    telefono:{

        type:Number,
        required:true
    },

    fechaInicio:{

        type:String,
        required:true
    },

    fechaFinal:{

        type:String,
        required:true
    },

    cantidadPersona:{

        type:Number,
        required:true
    },

    tipo:{
        
        type:String,
        required:true
    }

});

module.exports=model('Reserva',ReservaEsquema);
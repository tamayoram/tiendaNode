
// Traer el paquete express
const express = require('express');
const app = express();
const cors = require('cors');

const rutas=require('../routes/rutasReserva.js');

const { conectarBD }=require('../database/connection.js');

//Se crea la clase
class ServidorModelo{

    constructor(){

        // atributo global para configurar el servidor. Se crea la estructura para el servidor con express.
        this.app=express();
        this.desplegarBD();
        this.crearMiddlewares();
        this.llamarRutas();

    }

    desplegarServidor(){

        //Activando el servidor

        this.app.listen(process.env.PORT,function(){

            console.log(`Estoy conectado al puerto ${process.env.PORT}`);
          
          });


    }

    llamarRutas(){

        this.app.use('/',rutas);

    }

    desplegarBD(){

        conectarBD();

    }

    crearMiddlewares(){

        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));



    }


}

module.exports=ServidorModelo;
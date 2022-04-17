const express = require('express');
const cors = require('cors');


class Server{

    constructor(){
        this.app= express();
        this.port=process.env.PORT;
        // esta es la url de la ruta
        this.usuarioPath='/api/usuario';
        // midelwares
        this.middlewares();
        // rutas
        this.route();
    }

    middlewares(){
        // para publicar el directorio publico por defecto
        this.app.use(express.static('public'))
        // cors
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json());
    }

    route(){
        this.app.use(this.usuarioPath, require('../routes/users.route'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Aplicaicon corriendo en puerto', this.port);
        })
    }
}

module.exports=Server;
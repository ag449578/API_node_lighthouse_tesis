const express = require('express');
const cors = require('cors');

class Server{

    //Aqui se crea la configuración del server
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        // esta es la url de la ruta del endpoin
        this.usuarioPath = '/get/performance';
        // midelwares
        this.middlewares();
        // rutas
        this.route();
    }

    middlewares() {
        // para publicar el directorio publico por defecto
        this.app.use(express.static('public'))
        // cors para evitar errores a la hora de la peticion con algunos navegadores
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json());
    }

    route() {
        //Aqui se cargan las rutas de endpoin
        this.app.use(this.usuarioPath, require('../routes/users.route'));
    }

    //Con este metodo se pone el server a la escucha
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicaicon corriendo en puerto', this.port);
        })
        return 'Server up';
    }
}

module.exports = Server;
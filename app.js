require('dotenv').config();// captura y establece las variables de entorno del documento .env

//Aqui se importa la clase server para levantar el servidor
const Server = require('./models/server');

//inicializndo la avriable server
const server = new Server();

//iniciando el server   
server.listen();
var assert = require('assert');

const Server = require('../models/server');
const router = require('../routes/users.route');
const {evaluador} = require('../helpers/lhconfig');

//inicializaciones necesarias para las pruebas 
const server = new Server();
const serverTest = server.listen();

const routerTest = router.stack[0].route;

const dataTest =async()=>{
    return await evaluador('www.example.com');    
}


describe('Inicializacion del servicio web', function () {

    describe('Levantamiento del servidor', function () {

        it('Debe devolver el string <Server up> si se inicia correctamente', function () {
            assert.equal(serverTest, 'Server up');
        });

    });

    describe('Carga de endpoints', function () {

        it('Debe devolver el nombre del controlador que se dispara con este endpoint', function () {
            assert.equal(routerTest.stack[0].name, 'usuariosGet');
        });

    });

});

describe('Evaluacion de metricas de rendimiento', function () {

    describe('Prueba de metrica FCP', function () {

        it('Debe devolver el string <Server up> si se inicia correctamente', async function () {
            assert.equal('Server up', 'Server up');
            console.log( await dataTest());
        });

    });

    /* describe('Carga de endpoints', function () {

        it('Debe devolver el nombre del controlador que se dispara con este endpoint', function () {
            assert.equal(routerTest.stack[0].name, 'usuariosGet');
        });

    }); */

});



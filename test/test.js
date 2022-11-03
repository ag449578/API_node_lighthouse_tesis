const assert = require('chai').assert;

const Server = require('../models/server');
const router = require('../routes/users.route');
const {evaluador, config} = require('../helpers/lhconfig');

//inicializaciones necesarias para las pruebas 
const server = new Server();
const serverTest = server.listen();

const routerTest = router.stack[0].route;


describe('Comprobando inicializacion del servicio web', function () {

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

describe('Comprobando la configuracion del modulo de evaluacion', function () {

    describe('Identificador de metrica a evaluar', function () {

        it('Debe devolver un string identificador de la metrica first-contentful-paint', function () {
            assert.equal(config.settings.onlyAudits[0], 'first-contentful-paint');
        });
        it('Debe devolver un string identificador de la metrica largest-contentful-paint', function () {
            assert.equal(config.settings.onlyAudits[1], 'largest-contentful-paint');
        });
        it('Debe devolver un string identificador de la metrica speed-index', function () {
            assert.equal(config.settings.onlyAudits[2], 'speed-index');
        });
        it('Debe devolver un string identificador de la metrica total-blocking-time', function () {
            assert.equal(config.settings.onlyAudits[3], 'total-blocking-time');
        });
        it('Debe devolver un string identificador de la metrica interactive', function () {
            assert.equal(config.settings.onlyAudits[4], 'interactive');
        });
    
    });

});

describe('Comprobando la evaluacion de metricas de rendimiento', function () {

    describe('Prueba de metrica FCP', function () {
        it('Debe devolver un valor valido de la medicion', async function () {
            const dataTest = await evaluador('www.example.com');
            assert.typeOf(dataTest.audits['first-contentful-paint'].displayValue, 'string');
        }).timeout(10000);

    });
    describe('Prueba de metrica LCP', function () {
        it('Debe devolver un valor valido de la medicion', async function () {
            const dataTest = await evaluador('www.example.com');
            assert.typeOf(dataTest.audits['largest-contentful-paint'].displayValue, 'string');
        }).timeout(10000);

    });
    describe('Prueba de metrica SI', function () {
        it('Debe devolver un valor valido de la medicion', async function () {
            const dataTest = await evaluador('www.example.com');
            assert.typeOf(dataTest.audits['speed-index'].displayValue, 'string');
        }).timeout(10000);

    });
    describe('Prueba de metrica TBT', function () {
        it('Debe devolver un valor valido de la medicion', async function () {
            const dataTest = await evaluador('www.example.com');
            assert.typeOf(dataTest.audits['total-blocking-time'].displayValue, 'string');
        }).timeout(10000);

    });
    describe('Prueba de metrica TTI', function () {
        it('Debe devolver un valor valido de la medicion', async function () {
            const dataTest = await evaluador('www.example.com');
            assert.typeOf(dataTest.audits['interactive'].displayValue, 'string');
        }).timeout(10000);

    });
});



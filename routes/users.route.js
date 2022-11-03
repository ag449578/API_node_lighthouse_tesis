const {Router} = require ('express');//esto es una desestructuracion parra sacar la funcion Router del modulo express
const {getPerformance} = require ('../middles/middle');

const router = Router();//Inicializando una variable router con el objeto desestructurado

// Definiendo la ruta alternativa para el endpoin
router.get ( '/' , getPerformance );


module.exports = router;
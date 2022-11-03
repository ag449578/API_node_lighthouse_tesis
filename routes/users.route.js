const{Router}=require('express');//esto es una desestructuracion parra sacar la funcion Router del modulo express
const{getPerformance}=require('../middles/middle');

const router=Router();//usando lo que se saco de la desestructuracion

// usuariosGet hace referencia a la funcion que viene del controlador usuarios
router.get('/', getPerformance );


module.exports=router;
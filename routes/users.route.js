const{Router}=require('express');//esto es una desestructuracion parra sacar la funcion Router del modulo express
const{usuariosGet/* ,usuariosPut,usuariosPost,usuariosDelete */}=require('../controllers/users.controller');

const router=Router();//usando lo que se saco de la desestructuracion

// usuariosGet hace referencia a la funcion que viene del controlador usuarios
router.get('/', usuariosGet );

/* // para pasar un parametro de segmento de url al controlador
router.put('/:id', usuariosPut);

router.post('/', usuariosPost );

router.delete('/' , usuariosDelete ); */

module.exports=router;
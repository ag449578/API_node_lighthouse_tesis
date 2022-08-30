const {response, request} = require('express');
const {evaluador} = require('../helpers/lhconfig');

const usuariosGet =async (req=request, res=response) => {
    // para recoger parametros query en la url a traves del metodo GET ej: ?url=asdasdasd
    const {url}=req.query;
    // Llamada a la afuncion que evalua las petricas y devuelve la informacion
    const data=await evaluador(url);
    // Filtrando la informacion que se quiere y enviando la respuesta
    res.json({
        data
    });    
}

/* const usuariosPost =(req, res=Response) => {

    // json que viene en el req
    const {nombre, edad}=req.body;
    res.json({
        texto: 'get-usuariosPost',
        nombre,
        edad
    });
}

const usuariosPut =(req, res=Response) => {
    // parametro que viene en la url
    const {id}= req.params;

    res.json({
        texto: 'get-usuariosPut',
        id
    });
}

const usuariosDelete =(req, res=Response) => {
    res.json({
        texto: 'get-usuariosDelete'
    });
}
 */

module.exports={
    usuariosGet,
    // usuariosPost,
    // usuariosPut,
    // usuariosDelete
}
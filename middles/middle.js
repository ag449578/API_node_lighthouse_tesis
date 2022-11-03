// desestructurando objetos
const {response, request} = require('express');
const {evaluacionPerformance} = require('../helpers/lhconfig');

const getPerformance =async (req=request, res=response) => {
    // para recoger parametros query en la url a traves del metodo GET 
    const {url}=req.query;
    // Llamada a la afuncion que evalua las petricas y devuelve la informacion
    const data=await evaluacionPerformance(url);
    // Filtrando la informacion que se quiere y enviando la respuesta en formato Json
    res.json({
        data
    });    
}


module.exports={
    getPerformance,
    
}
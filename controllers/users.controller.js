const {response, request} = require('express');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const lhconfig = require('../helpers/lhconfig');

const usuariosGet =(req=request, res=response) => {
    // para recoger parametros query en la url
    const {url}=req.query;

    (async () => {
        const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
        const options = {logLevel: 'info', output: 'json', port: chrome.port};
        const runnerResult = await lighthouse(`https://${url}`, options,lhconfig);
      
        const {lighthouseVersion, requestedUrl,fetchTime, environment, audits, categories}=runnerResult.lhr;
        res.json({
            lighthouseVersion, 
            requestedUrl,
            fetchTime, 
            environment, 
            audits, 
            categories
        });
      
        // `.lhr` is the Lighthouse Result as a JS object
        console.log('Report is done for', runnerResult.lhr.finalUrl);
        console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);
      
        await chrome.kill();
    })();


    
}

const usuariosPost =(req, res=Response) => {

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


module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}
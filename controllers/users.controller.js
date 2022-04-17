const {response, request} = require('express');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

const usuariosGet =(req=request, res=response) => {
    // para recoger parametros query en la url
    const {url}=req.query;

    (async () => {
        const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
        const options = {logLevel: 'info', output: 'json', onlyCategories: ['performance'], port: chrome.port};
        const runnerResult = await lighthouse(`https://${url}`, options);
      
        // // `.report` is the HTML report as a string
        // const reportHtml = runnerResult.report;
        // fs.writeFileSync('lhreport.html', reportHtml);

        res.json({
            runnerResult
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
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const {config} = require('./config')


// Funcion que evalua las metricas
const evaluacionPerformance= async (url) => {
    const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
    const options = {logLevel: 'info', output: 'json', port: chrome.port};
    const runnerResult = await lighthouse(`https://${url}`, options, config);
    
    // lhr es el resultado de lighthouse como objeto literal de javascript
    console.log('Report is done for', runnerResult.lhr.finalUrl);
    console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);
    
    await chrome.kill();

    // Desestructurando al informacion obtenida
    const {lighthouseVersion, requestedUrl,fetchTime, environment, audits, categories}=runnerResult.lhr;
    // Retornando los datos
    return {
        lighthouseVersion, 
        requestedUrl,
        fetchTime, 
        environment, 
        audits, 
        categories
    };
}

module.exports = {
    evaluacionPerformance
}
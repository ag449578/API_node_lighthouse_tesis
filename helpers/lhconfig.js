const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

// Configuraciones para la funcion evaluador
const config = {
    extends: 'lighthouse:default',
    settings: {
        onlyAudits: [
            'first-contentful-paint',
            'largest-contentful-paint',
            'speed-index',
            'total-blocking-time',
            'interactive',
        ],
    },
};

// Funcion que evalua las metricas
const evaluacionPerformance= async (url) => {
    const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
    const options = {logLevel: 'info', output: 'json', port: chrome.port};
    const runnerResult = await lighthouse(`https://${url}`, options, config);
    
    // `.lhr` is the Lighthouse Result as a JS object
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

module.exports={
    config,
    evaluacionPerformance
}
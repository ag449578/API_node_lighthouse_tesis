// Configuraciones para la funcion de evaluación
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

module.exports = {
    config
}
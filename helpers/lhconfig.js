module.exports = {
    extends: 'lighthouse:default',
    settings: {
        onlyAudits: [
            'first-contentful-paint',
            'largest-contentful-paint',
            'speed-index',
            'total-blocking-time',
        ],
    },
};
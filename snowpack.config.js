const httpProxy = require('http-proxy');
const proxy = httpProxy.createServer({ target: 'http://localhost:7071' });

module.exports = {
    mount: {
        'public': '/',
        'src': '/dist'
    },

    routes: [
    {
      src: '/api/.*',
      dest: (req, res) => {
        // remove /api prefix (optional)
        // req.url = req.url.replace(/^\/api/, '');
        proxy.web(req, res);
      },
    },
  ],
};

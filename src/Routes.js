const express = require('express');
const server = express();

module.exports = app => {
    const handle = app.getRequestHandler();

    server.get('/usados/:brand', (req, res) => {
        const actualPage = '/usados';
        const queryParams = {brand: req.params.brand};
        app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    })
};
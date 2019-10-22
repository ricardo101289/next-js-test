module.exports = (app, server) => {
  server.get('/usados', (req, res) => {
    const actualPage = '/usados';
    app.render(req, res, actualPage);
  });
  server.get('/', (req, res) => {
    const actualPage = '/index';
    app.render(req, res, actualPage);
  });
  server.get('/usados/:brand', (req, res) => {
    const actualPage = '/usados';
    const queryParams = {brand: req.params.brand};
    app.render(req, res, actualPage, queryParams);
  });
};
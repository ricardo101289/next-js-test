const next = require('next');
const routes = require('./src/Routes');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});

app.prepare()
    .then(() =>
        routes(app)
    )
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
module.exports = (app) => {
    app.use('/test', require('./test.routes.js'))
}
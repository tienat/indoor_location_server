const express = require('express')
const expressWs = require('express-ws')
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const deviceRoutes = require('./routes/deviceRoutes');
const imageRoutes = require('./routes/imageRoutes');
const AppError = require('./utils/appError');

const app = express();
const appWs = expressWs(app)

// Start websocket
app.ws('/echo', ws => {
    ws.on('message', msg => {
        console.log('Receive from client: ' + msg)
        ws.send(msg)
    })
})

// Routes
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) 
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/devices', deviceRoutes);
app.use('/api/v1/images', imageRoutes);

// handle undefined Routes
app.use('*', (req, res, next) => {
    const err = new AppError(404, 'fail', 'undefined route');
    next(err, req, res, next);
});

module.exports = app;
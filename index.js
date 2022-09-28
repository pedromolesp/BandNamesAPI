const express = require('express');
const path = require('path');
require('dotenv').config();

//App Express
const app = express();

//Node server
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//Mensajes Sockets
io.on('connection', client => {
    console.log("Cliente conectado");
    client.on('disconnect', () => { console.log("Cliente desconectado"); });
});

//path public
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor corriendo', process.env.PORT);
}) 
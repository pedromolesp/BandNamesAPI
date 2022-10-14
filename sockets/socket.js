const { io } = require('../index')
//Mensajes Sockets
io.on('connection', client => {
    console.log("Cliente conectado");
    client.on('disconnect', () => { console.log("Cliente desconectado"); });
    client.on('mensaje', (payload) => {
        console.log('Mensaje!', payload.nombre);
        io.emit('mensaje', { admin: 'Mensaje' })
    })
    socket.on('emitir-mensaje', (payload) => {
        io.emit('nuevo-mensaje', payload); //emite a todos
        client.broadcast.emit('nuevo-mensaje', payload); //emite a todos menos al emisor
    })
});

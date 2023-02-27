const { io } = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');

const bands = new Bands();

bands.addBand(new Band("Billy Talent"))
bands.addBand(new Band("Breaking Benjamin"))
bands.addBand(new Band("Los Zigarros"))
bands.addBand(new Band("Unsun"))

console.log(bands);
//Mensajes Sockets
io.on('connection', client => {
    console.log("Cliente conectado");

    client.emit("active-bands", bands.getBands());
    client.on('disconnect', () => { console.log("Cliente desconectado"); });
    client.on('mensaje', (payload) => {
        console.log('Mensaje!', payload.nombre);
        io.emit('mensaje', { admin: 'Mensaje' })
    })
    client.on('vote-band', (payload) => {
        bands.voteBand(payload.id);
        io.emit('active-bands', bands.getBands());
    })
    // client.on('emitir-mensaje', (payload) => {
    //     // console.log(payload);
    //     // io.emit('nuevo-mensaje', payload); //emite a todos
    //     client.broadcast.emit('nuevo-mensaje', payload); //emite a todos menos al emisor
    // })
});

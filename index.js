const express = require('express');

const app = express();


app.listen(3000, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor corriendo', 3000);
}) 
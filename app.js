const express = require('express');
const app = express();

const rotaCharacteristics = require('./routes/traits');

app.use('/traits', rotaCharacteristics);

app.use((req,res,next) => {
    res.status(404).send({
        mensage: 'None router found'
    });
});

module.exports = app;
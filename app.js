const express = require('express');
const app = express();

const rotaCharacteristics = require('./routes/traits');
const rotaCardlist = require('./routes/cardlist');

app.use('/traits', rotaCharacteristics);
app.use('/cardlist', rotaCardlist);

app.use((req,res,next) => {
    res.status(404).send({
        mensage: 'None router found sorry'
    });
});

module.exports = app;
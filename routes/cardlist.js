const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    let cardlist = [
        {   
            idCartao : "QWEUYTRASDJHGF",
            nome_catao : "VA ticket",
            numero_catao : "5555 6666 7777 8888",
            nome_titular: "Nilson do Santos",
            ativo : true,
            desbloqueado : true,
            cor: { red : 50 , green: 40 , blue: 50}
        },
        {   
            idCartao : "ZXCMNBVASDJHGF",
            nome_catao : "VA ticket",
            numero_catao : "5555 6666 1221 4554",
            nome_titular: "Pedro do Santos",
            ativo : true,
            desbloqueado : true,
            cor: { red : 50 , green: 40 , blue: 50}
        },
        {   
            idCartao : "LKJDFGHPOITYUI",
            nome_catao : "VR ticket",
            numero_catao : "4346 6666 7777 4567",
            nome_titular: "Julio do Santos",
            ativo : true,
            desbloqueado : false,
            cor: { red : 70 , green: 40 , blue: 50}
        },
        {   
            idCartao : "ASDREWQREWASDF",
            nome_catao : "VA ticket",
            numero_catao : "5555 4566 9786 3242",
            nome_titular: "Nathailia de Oliveira",
            ativo : false,
            desbloqueado : true,
            cor: { red : 50 , green: 40 , blue: 50}
        },
        {   
            idCartao : "JHGASDFASDJHGF",
            nome_catao : "VR ticket",
            numero_catao : "1234 6666 7665 8888",
            nome_titular: "Nilson do Santos",
            ativo : true,
            desbloqueado : true,
            cor: { red : 70 , green: 40 , blue: 50}
        },
    ];

    res.status(200).send({
        mensagem: 'Get used in cardlist',
        cardlist: cardlist
    });
});

module.exports = router;
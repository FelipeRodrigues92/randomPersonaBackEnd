const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).send({
        mensagem: 'Get used in characteristics'
    });
});

router.get('/:quantity',(req,res,next) => {

    const quantity = req.params.quantity;

    if(quantity <= 0 ){
        res.status(406).send({
            mensagem: 'This operation does not accept zero as params'
        });
    }else{
        res.status(200).send({
            mensagem: 'Get by quantity',
            quantityValue: quantity
        });
    }
});

router.post('/',(req,res,next) =>{
    res.status(200).send({
        mensagem: 'Post exemple'
    });
});


module.exports = router;
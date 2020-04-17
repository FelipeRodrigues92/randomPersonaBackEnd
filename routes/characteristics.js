const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).send({
        mensagem: 'Get used in characteristics'
    });
});

router.get('/:quantity',(req,res,next) => {
    let characteristics = ['samurai',
    'ninja',
    'mago',
    'exorcista',
    'pirata',
    'soldado',
    'cozinheiro',
    'espadachim',
    'cavaleiro',
    'alquimista',
    'desenhista',
    'deus',
    'ladrão',
    'herói',
    'chefe',
    'vilão',
    'furry',
    'assassino',
    'lutador',
    'salvador',
    'melhor amigo',
    'rival',
    'secundário',
    'estrategista',
    'detetive',
    'cientista',
    'carteiro',
    'dono de casa',
    'demônio',
    'escolhido',
    'sensei',
    'chorona',
    'vampiro',
    'loli',
    'paranormal',
    'atleta',
    'almirante',
    'tirano',
    'caçador',
    'fantasma',
    'renegado',
    'proibido',
    'procurado',
    'sábio',
    'yakuza',
    'músico',
    'médico',
    'robô',
    'trabalhador',
    'ganancioso',
    'rico',
    'pobre',
    'zumbi',
    'alienígena',
    'tsundere',
    'gal',
    'órfão', 'Banana'];
    var arr2 = [];

    const quantity = req.params.quantity;

    if(quantity <= 0 ){
        res.status(406).send({
            mensagem: 'This operation does not accept zero as params'
        });
    }else{

        for (let i = 0; i < quantity; i++) {
            arr2.push(characteristics[0]);// getRandomInt();
          }

        res.status(200).send({
            mensagem: 'Get by quantity',
            quantityValue: arr2
        });
    }
});

router.post('/',(req,res,next) =>{
    res.status(200).send({
        mensagem: 'Post exemple'
    });
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = router;
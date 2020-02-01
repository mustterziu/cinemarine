import {Router} from "express";
const router = new Router();

import validate from '../validatiors/contactValidator'
import Message from '../models/contact'

router.post('/', (req, res, next) => {
    const {error} = validate(req.body);
    if (error){
        res.status(422);
        return res.send(error.details[0].message);
    }

    const msg = new Message({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    });

    msg.save().then(msg => {
        res.status(201).send({
            msg: 'Mesazhi u dergua me sukses',
            content: msg
        });
    }).catch(reason => {
        res.status(400).send(reason);
    });
});

module.exports = router;

import express from 'express';

const router = express.Router();

import {authorize, admin} from '../helpers/verifyToken';
import User from '../models/user';

router.get('/', authorize, admin, (req, res, next) => {
    User.find().then(value => {
        res.send(value);
    }).catch(reason => {
        res.status(400).send({msg: reason});
        console.log(reason)
    });
});

router.get('/:id', authorize, (req, res, next) => {
   User.findById(req.params.id).then(value => {
       res.send(value);
   }).catch(reason => {
       console.log(reason);
       res.status(400).send(reason);
   })
});

router.put('/:id', authorize, admin, (req, res, next) => {

    User.findById(req.params.id).then(value => {

    }).catch(reason => {
        console.log(reason);
        res.status(400).send(reason);
    })
});

module.exports = router;

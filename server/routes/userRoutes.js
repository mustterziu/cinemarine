import express from 'express';

const router = express.Router();

import {authorize, admin} from '../helpers/verifyToken';
import User from '../models/user';
import Movie from "../models/movie";


router.get('/', authorize, admin, (req, res, next) => {
    User.find().then(value => {
        res.send(value);
    }).catch(reason => {
        res.status(400).send({msg: reason});
        console.log(reason)
    });
});

router.get('/config', authorize, (req, res, next) => {
    User.findById(req.user._id).then(value => {
        res.send(value.config);
    }).catch(reason => {
        console.log(reason);
        res.status(400).send(reason);
    })
});

router.post('/config', authorize, (req, res, next) => {
    User.findById(req.user._id).then(value => {
        value.config.navbarColor = req.body.navcolor;
        value.config.navbarPosition = req.body.navbarPosition;
        return value.save();
    }).then(updated => {
        res.status(200).send({msg: 'config was updated'});
    }).catch(reason => {
        console.log(reason);
        res.status(400).send(reason);
    })
});

router.get('/:id', authorize, admin, (req, res, next) => {
    User.findById(req.params.id).then(value => {
        res.send(value);
    }).catch(reason => {
        console.log(reason);
        res.status(400).send(reason);
    })
});

router.delete('/:id', authorize, admin, (req, res, next) => {
    const id = req.params.id;
    User.deleteOne({_id: id})
        .then(value => {
            res.status(200).json({msg: `user with id: ${id} was deleted`, value});
        }).catch(reason => {
        res.status(400).json({msg: `error deleting user with id: ${id}`})
    });
});

router.put('/:id', authorize, admin, (req, res, next) => {
    User.findById(req.params.id).then(value => {
        value.role = req.body.role;
        return value.save();
    })
        .then(value => {
            res.send({msg: 'user was updated'});
            console.log(value);
        })
        .catch(reason => {
            console.log(reason);
            res.status(400).send(reason);
        })
});



module.exports = router;

import express from 'express';
import jwt from 'jsonwebtoken';
const bcrypt = require('bcryptjs');

const router = express.Router();

import {authorize} from '../helpers/verifyToken';
import {UserValidator} from '../validatiors/userValidator';
import {secret} from '../config';

import User from '../models/user';

router.post('/register', async (req, res, next) => {
    //Validate input
    const {error} = UserValidator.validateRegistration(req.body);
    if (error) {
        return res.status(400).send(error);
    }

    //Hash pw
    const salt = await bcrypt.genSalt(10);
    const hashedPw = await bcrypt.hash(req.body.password, salt);

    //Create instance
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPw,
    });

    //Save to db
    try {
        let newUser = await user.save();
        res.status(201).send({
            msg: 'Llogaria u krijua me sukses',
            user: {username: user.username, email: user.email}
        });
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post('/login', async(req, res, next) => {
    //Validate input
    const {error} = UserValidator.validateLogin(req.body);
    if (error){
        res.status(400).send(error);
    }

    try {
        //find user
        const user = await User.findOne({username: req.body.username});
        if (!user) {
            res.status(400).send({msg: 'Username ose passwordi eshte gabim.'});
        }

        //decrypt pw
        const valid = await bcrypt.compare(req.body.password, user.password);
        if (!valid){
            res.status(400).send({msg: 'Username ose passwordi eshte gabim.'});
        }else{
            //generate token
            let date = new Date();
            date.setHours(date.getHours() + 1);
            console.log(secret);
            const token = jwt.sign({_id: user._id, role: user.role}, secret, {expiresIn: '1h'});
            res.send({token, expiration: date});
        }
    } catch (e) {
        res.status(400).send(e)
    }
});

router.get('/test', authorize, (req, res, next) => {
   res.send('auth');
});

module.exports = router;

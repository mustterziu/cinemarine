const jwt = require('jsonwebtoken');
import {secret} from '../config.json';

module.exports.authorize = (req, res, next) =>{
    const token = req.headers.authorization.split(' ')[1];
    if (token){
        try{
            const verify = jwt.verify(token, secret);
            req.user = verify;
            next();
        }catch (e) {
            console.log(e);
            res.status(400).send({msg: 'Tokeni nuk eshte valid'});
        }
    }else {
        res.status(401).send({msg: 'Kycu per te vazhduar.'})
    }
};

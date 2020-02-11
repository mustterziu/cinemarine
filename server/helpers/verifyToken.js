const jwt = require('jsonwebtoken');
import {secret} from '../config.json';

module.exports.authorize = (req, res, next) =>{
    const auth = req.headers.authorization;
    if (auth){
        try{
            const token = auth.split(' ')[1];
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

module.exports.admin = (req, res, next) => {
    if (req.user.role !== 1){
        res.status(401).send({msg: 'Ju nuk keni akses ketu.'});
    }
    next();
};

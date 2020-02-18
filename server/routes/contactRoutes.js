import {Router} from "express";
const router = new Router();

import {authorize, admin} from "../helpers/verifyToken";
import validate from '../validatiors/contactValidator'
import Message from '../models/contact'

router.get('/', authorize, admin, (req, res, next) => {
   Message.find()
       .then(messages => {
           res.send(messages);
       })
       .catch(reason => console.log(reason));
});

router.delete('/:id', authorize, admin, (req, res, next) => {
   const id = req.params.id;
   Message.deleteOne({_id: id})
       .then(value => {
           res.status(200).send({msg: 'mesazhi i fshi me sukses'});
       })
       .catch(reason => {
           res.status(400).send({msg: 'error deleting message'});
           console.log(reason)
       });
});

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

//**************TESTING**********************************
import Image from '../models/image';
import Movie from '../models/movie';

router.post('/img', (req, res, next) => {
    console.log(req.files.file);
    console.log(req.body);

    let file = req.files.file;
    const movie = new Movie({
        image: {
            data: file.data,
            contentType: file.mimetype,
            fileName: file.name,
            encoding: file.encoding
        },
        title: req.body.title,
        description: req.body.description,
        releaseYear: req.body.releaseYear,
        trailerVideoUrl: req.body.trailerVideoUrl,
        director: req.body.director,
        genres: req.body.genres,
        cast: req.body.cast
    });
    console.log(movie);
    movie.save()
        .then(value => {
            console.log(value);
        }).catch(reason => console.log(reason));
    // const img = new Image({
    //     title: req.body.title,
    //     image: {data: file.data, contentType: file.mimetype},
    //     mimeType: file.mimetype,
    //     fileName: file.name,
    //     encoding: file.encoding,
    // });

    // img.save().then(image =>{
    //     res.send(image);
    // });
    // console.log(img);
    // console.log(new Buffer(req.files.img.data, 'binary').toString());
});

router.get('/img', (req, res, next) => {
   Movie.findOne({_id: '5e45e4f5931f4b20d8c1db48'})
       .then(movie =>{
           // res.contentType(img.mimeType);
           res.send(movie);
       })
       .catch(reason => console.log(reason));
});
module.exports = router;

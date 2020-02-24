import express from 'express';

const router = express.Router();

import Schedule from '../models/schedule';
import User from '../models/user';
import Movie from '../models/movie';

import {authorize, admin} from "../helpers/verifyToken";

const slots = {
    1100: '11:00',
    1400: '14:00',
    1800: '18:00',
    2100: '21:00'
};

const rooms = {
    ubtpz: 'UBT-PZ',
    ubtpr: 'UBT-PR',
    ubtfr: 'UBT-FR'
};

router.get('/', (req, res, next) => {
    Schedule.find()
        .then(value => {
            res.status(200).send(value);
        })
        .catch(reason => {
            res.status(400).send({msg: 'error getting shcedule'});
        });
});

router.post('/', authorize, admin, async (req, res, next) => {
    const date = new Date(req.body.date);
    console.log(date);
    res.json(date);
    // try {
    //     const date = Date.parse(req.body.date);
    //     console.log(date, date.getDate());
    //     return;
    //     const slot = req.body.slot;
    //     const room = req.body.room;
    //     const movie = await Movie.findById(req.body.movie);
    //     const user = await User.findById(req.user._id);
    //
    //     const schedule = new Schedule({
    //         date: date,
    //         slot: slot,
    //         room: room,
    //         movie: movie,
    //         addedBy: user,
    //     });
    //
    //     let saved = await schedule.save();
    //
    //     console.log(saved);
    //
    // } catch (e) {
    //     res.status(400).send(e);
    // }
});


module.exports = router;

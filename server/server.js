require('rootpath')();
import express from 'express';
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "regenerator-runtime/runtime";

import config from "./config.json";

import errorHandler from "./helpers/error-handler";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
import authRoutes from './routes/authRoutes'
app.use('/api/user', authRoutes);

import contactRoutes from './routes/contactRoutes'
app.use('/api/contact', contactRoutes);

// app.use('/api/movies', require('./routes/movieRouter'));

app.use(errorHandler);

const port = process.env.NODE_ENV === 'production' ? 80 : 4000;

mongoose.connect(config.mongodb)
    .then(value => {
        app.listen(port, function () {
            console.log('Server listening on port ' + port);
        });
    })
    .catch(reason => console.log(reason));

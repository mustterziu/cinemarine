require('rootpath')();
import express from 'express';
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "regenerator-runtime/runtime";
import fileUpload from 'express-fileupload';

import config from "./config.json";

import errorHandler from "./helpers/error-handler";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload({}));
app.use('/public',express.static('uploads'));

// api routes
import authRoutes from './routes/authRoutes'
app.use('/api/user', authRoutes);

import userRoutes from './routes/userRoutes'
app.use('/api/users', userRoutes);

import contactRoutes from './routes/contactRoutes'
app.use('/api/contact', contactRoutes);

import movieRouter from './routes/movieRouter'
app.use('/api/movies', movieRouter);

app.use(errorHandler);

const port = process.env.NODE_ENV === 'production' ? 80 : 4000;

mongoose.connect(config.mongodb)
    .then(value => {
        app.listen(port, function () {
            console.log('Server listening on port ' + port);
        });
    })
    .catch(reason => console.log(reason));

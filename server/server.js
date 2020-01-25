require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');
const mongoose = require('mongoose');
const config = require('./config.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./controllers/users.controller'));

app.use('/api/movies', require('./routes/movieRouter'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;

mongoose.connect(config.mongodb)
    .then(value => {
        const server = app.listen(port, function () {
            console.log('Server listening on port ' + port);
        });
    })
    .catch(reason => console.log(reason));

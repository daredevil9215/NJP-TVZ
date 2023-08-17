const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mysql = require('promise-mysql');
const api = require('./app/api');
const auth = require('./app/authenticate');
const config = require('./config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const port = config.port;
const app = express();

async function init_server() {

        pool = await mysql.createPool(config.pool);

        let authRouter;
        let apiRouter;

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        app.use(express.static(__dirname+'/public'));

        app.use(function(req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
                res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \ Authorization');
                next();
        });

        app.use(morgan('dev'));

        authRouter = auth(express, pool, jwt, config.secret, bcrypt);
        app.use('/authenticate', authRouter);

        apiRouter = api(express, pool, jwt, config.secret);
        app.use('/api', apiRouter);

        app.get('*', function(req, res) {
                res.sendFile(path.join(__dirname, 'public/index.html'));
        });
}

init_server();

app.listen(port);
console.log('Running on http://localhost:' + port + '/');
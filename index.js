require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const logger = require('morgan');
const db = require('./models');
const routes = require('./routes');
const router = express.Router();

const environment = process.env.NODE_ENV; // development

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

if(environment !== 'production') {
  app.use(logger('dev'));
}

app.listen(3000, function() {
  db.sequelize.sync();
});

app.use('/api/v1', routes(router));
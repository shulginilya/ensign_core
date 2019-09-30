/**
 * @desc imports
 */
import express from 'express';

/**
 * @desc variables definitions
 */
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

/**
 * @desc basic security / logger
 */
app.use(helmet());
app.use(morgan('dev'));

/**
 * @desc entry point route
 */
app.get('/', (req, res) => {
  res.send('ok');
});

/**
 * @desc application listener for keep it in event loop
 */
app.listen(1302);

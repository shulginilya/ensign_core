import express from 'express';

const app = express();

// basic security
const helmet = require('helmet');
app.use(helmet());

app.get('/', (req, res) => {
  res.send('ok');
});

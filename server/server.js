const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const apiRouter = require('./routes/apiRouter');

require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(cors({
  credentials: true,
  origin: true,
}));
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', apiRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));

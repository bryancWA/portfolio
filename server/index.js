const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const PORT = 3000;

app.use(morgan('dev'));

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
})
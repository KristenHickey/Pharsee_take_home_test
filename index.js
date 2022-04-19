require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.SERVER_PORT;
const cors = require('cors');

const router = require('./router');

app.use(cors());
app.use(express.json());
app.use(router);

( function () {
  app.listen(PORT, () => {
    console.log('Server running on port', PORT)
  })
})()
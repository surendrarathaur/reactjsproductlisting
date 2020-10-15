const express = require('express');
const bodyParser = require('body-parser');
const PORT = 4200;
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/product', (req, res) => {
  const data = require('./data/db.json');
  res.json(data);
});

app.listen(PORT, function(){
  console.log('Server is running on Port: ', PORT);
});
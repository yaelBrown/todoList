const express = require('express');
const path = require('path');
const app = express();

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '/')});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
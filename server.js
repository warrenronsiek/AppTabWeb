/**
 * Created by warren on 3/16/17.
 */
var express = require('express');
var path = require('path');
var compression = require('compression');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log("Production express server running at localhost: " + PORT)
});

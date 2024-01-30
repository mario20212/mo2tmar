const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
const server = require('http').createServer(app);
app.use(express.urlencoded());

const home = require('./routes/home.js');
app.use('/', home);



server.listen(8080, () => {
  console.log("Server is running.....");
});
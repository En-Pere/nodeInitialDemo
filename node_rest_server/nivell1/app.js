const express = require('express');
const app = express();
const myApp = require('./controllers')
//const multer = require('multer');
//const myApp = require('./app');

// - Exercici 1
// Crea un servidor amb Express que retorni a una petició GET a l'endpoint /user un json amb el teu nom, edat i la url des d'on es fa la petició.

app.get('/user', myApp.reqUser);

app.get('*', myApp.mistake);

// - Exercici 2
// Afegeix un endpoint /upload per a pujar al servidor un arxiu de tipus png, jpg o gif que retorni un missatge d'error en cas que l'extensió de l'arxiu no coincideixi amb aquestes.

app.post('/upload', myApp.upload, function(req, res) {
  res.send(req.file);
});

module.exports = app;
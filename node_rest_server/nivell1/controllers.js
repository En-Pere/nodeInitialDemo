// const express = require('express');
// const app = express();
// const multer = require('multer');
// //const myApp = require('./app');


const multer = require('multer');

const reqUser = (req,res) => {
  res.json({
    nom: 'pere ruiz',
    edat: '37',
    urlpeticio: req.originalUrl
  })
};

const mistake = (req, res) => {
  res.json({
    error: 'Error 404'
  })
}

//creamos la variable upload. Multer para definir dónde guardaremos las imagenes y filtramos x tipo de imagen
const upload = multer({
  dest: './imagenes',
  fileFilter: function (req, file, cb) {
    if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/gif" || file.mimetype == "image/jpeg" || req.file){
      return cb(null, true);
      } else { 
        return cb(new Error('Solo archivos jpg, png o gif se permiten'))
      }  
  }
})
.single('subir_archivo')


// upload(req, res, function(err) {
//   // req.file contains information of uploaded file
//   // req.body contains information of text fields, if there were any

//   if (req.fileValidationError) {
//       return res.send(req.fileValidationError);
//   }
//   else if (!req.file) {
//       return res.send('Please select an image to upload');
//   }
//   else if (err instanceof multer.MulterError) {
//       return res.send(err);
//   }
//   else if (err) {
//       return res.send(err);
//   }


module.exports = {upload, reqUser, mistake};





var express = require('express');
var multer = require('multer');
var upload = multer({
  limits: { fileSize: 10 * 1024 * 1024 }
});
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', scriptsSrc: "javascripts/file_size.js"});
});

router.post('/upload', upload.single('userFile'), function(req, res, next){
  console.log(req.file);
  res.json({"size": req.file.size});
});

module.exports = router;

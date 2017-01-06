const express = require('express'),
      app     = express(),
      port    = process.env.PORT || 8080,
      root    = __dirname + '/public/';

app.use(express.static(root));

app.get('/', function(req, res){
  res.sendFile(root + 'index.html');
});

app.get('/transcript', function(req, res){
  res.sendFile(root + 'pdfs/transcript.pdf');
});

app.get('/resume', function(req, res){
  res.sendFile(root + 'pdfs/resume.pdf');
});

app.get('/cover/google', function(req, res){
  res.sendFile(root + 'pdfs/cover.pdf');
});

app.listen(port, function(){
  console.log('LISTENING ON PORT ' + port);
});
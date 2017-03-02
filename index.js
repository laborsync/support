var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('*', function(req, res) {
  
  var url = 'http://laborsync.help';
  if(req.path.length > 1) {
    url = url + req.path;
  }
  
  res.redirect(301, url);

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
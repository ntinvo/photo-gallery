var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
})

app.listen(PORT, function(err) {
  if(err)
    console.error(err);
  else
    console.info("Listening on port %s. Go to http://localhost:%s/ ", PORT, PORT);
});

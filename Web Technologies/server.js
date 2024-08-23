var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello and Welcome!');
  console.log("server started at 3000")

}).listen(3000);

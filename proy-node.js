const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  var q = url.parse(req.url, true);
  
  var s = q.pathname; 
  respuesta = {};

  if(s.substr(0,7) == '/hello/'){
    var nombre = s.substr(7);
    respuesta.hello = nombre;
    res.write(JSON.stringify(respuesta,));
  }
  else{
    res.write('DIRECCIÓN NO VÁLIDA:' + s);
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
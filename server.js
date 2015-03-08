var fs = require('fs');
var path = require('path');
var http2 = require('http2');
var debug = require('debug')('server');
var mime = require('mime-types')
var url = require('url');

// We cache one file to be able to do simple performance tests without waiting for the disk
var cachedFile = fs.readFileSync(path.join(__dirname, './index.html'));
var cachedUrl = '/';

var scripts = [
  'js/aws-sdk-ecs.js',
  'bower_components/react/react.js',
  'bower_components/react/react-with-addons.js',
  'bower_components/react/JSXTransformer.js',
  'bower_components/reflux/dist/reflux.js',
  'js/main.jsx',
];

function pushFile (response, filename) {
	var push = response.push({ path: '/' + filename, protocol: 'https:' });
  debug('--> PUSH', filename);

  push.setHeader('Content-Type', mime.lookup(filename));
	push.writeHead(200);
	fs.createReadStream(path.join(__dirname, '/' + filename)).pipe(push);
}

// The callback to handle requests
function onRequest(request, response) {
  req = url.parse(request.url);

  var filename = path.join(__dirname, req.pathname);

  // debug('request', req)
  debug('<--', request.url)
  
  // Serving server.js from cache. Useful for microbenchmarks.
  if (req.pathname === cachedUrl) {
  	// debug('response', response)
    if (response.push) {
      scripts.forEach(function (script) {
        pushFile(response, script);
      });
    }
    debug('-->', '/index.html');
    response.setHeader('Content-Type', 'text/html');
    response.end(cachedFile);
  }

  // Reading file from disk if it exists and is safe.
  else if ((filename.indexOf(__dirname) === 0) && fs.existsSync(filename) && fs.statSync(filename).isFile()) {
    response.setHeader('Content-Type', mime.lookup(filename));
    response.writeHead('200');
    debug('-->', filename);

    fs.createReadStream(filename).pipe(response);
  }

  // Otherwise responding with 404.
  else {
    response.writeHead('404');
    response.end();
  }
}

var log = require('http2/test/util').createLogger('server');

// Creating the server in plain or TLS mode (TLS mode is the default)
var server;
if (process.env.HTTP2_PLAIN) {
  server = http2.raw.createServer({
  }, onRequest);
} else {
  server = http2.createServer({
    // key: fs.readFileSync(path.join(__dirname, '/localhost.key')),
    // cert: fs.readFileSync(path.join(__dirname, '/localhost.crt'))
    key: fs.readFileSync(path.join(__dirname, './localhost.key')),
    cert: fs.readFileSync(path.join(__dirname, './localhost.crt'))
  }, onRequest);
}
server.listen(process.env.HTTP2_PORT || 8443);

debug('Listening on port 8080 and 8443.');

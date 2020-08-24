//HTTP Request
var http = require('http'),
    config = require('./config'),
    fileHandler = require('./filehandler'),
    parse = require('url').parse,
    types = config.types,
    rootFolder = config.rootFolder,
    defaultIndex = config.defaultIndex,
    server;

module.exports = server = http.createServer();
server.on('request', onRequest);

function onRequest(req, res) {
    var filename = parse(req.url).pathname,
        fullPath,
        extension;
  if (filename === '/') {
    filename = defaultIndex;
  }
  fullPath = rootFolder + filename;
  extension = filename.substr(filename.lastIndexOf('.') + 1);

  fileHandler(fullPath, function(data){
    res.writeHead(200, {
              'Content-Type': types[extension] || 'text/plain',
              'Content-Length': data.length
    });
    res.end(data);
}, function(err) {
    res.writeHead(404);
    res.end();
});
}



















// const petal = require('./petal.js');
// const url = require('url');
// const fs = require('fs');
// const events = require('events');
// var eventEmitter = new events.EventEmitter();
// const port = 3000;
// const hostname = '127.0.0.1';
//const oh = 'http://localhost:8080/default.htm?year=2017&month=february'
// const server = http.createServer(function (req, res) {
//   const q = url.parse(req.url, true);
//   const filename = '.' + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       res.write(`<a href='./test1.html'>Homepage</a> <br> <br>`);
//       res.write(`<a href='./test2.html'>Testpage</a> <br> <br>`);
//       return res.end('404 Not Found');
//
//     } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   }
//   // res.write('The date and time are currently: ' + petal.myDateTime());
//   // res.write(req.url);
//   // res.end('Hello World!');
//   //const q = url.parse(req.url, true).query;
//   //const txt = q.year + ' ' + q.month;
//   //res.write(txt + '<br> <p> Hello');
//   });
// });
// //   const a = function(req.url == '/fileupload') {
// //     const form = new formidable.IncomingForm();
// //     form.parse(req, function (err, fields, files) {
// //       res.write('File uploaded');
// //       res.end();
// //     });
// //   } else {
// //     res.writeHead(200, {'Content-Type': 'text/html'});
// //     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
// //     res.write('<input type="file" name="filetoupload"><br>');
// //     res.write('<input type="submit">');
// //     res.write('</form>');
// //     return res.end();
// //   }
// // });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// fs.open('oldpassword.txt', 'w', function (err, file){
//   if (err) throw err;
//   console.log('Saved');
// }); // create without info
//
// fs.writeFile('oldpassword.txt', 'Nice', function (err, file){
//   if (err) throw err;
//   console.log('Saved');
// }); // replace or add information
//
// fs.appendFile('oldpassword.txt', 'Great!', function (err) {
//   if (err) throw err;
//   console.log('Saved');
// }); // add information to end of the file
//
// fs.rename('oldpassword.txt', 'newpassword.txt', function(err) {
//   if (err) throw err;
//   console.log('File renamed.');
// }); // rename a file
//
// fs.unlink('newpassword.txt', function(err) {
//   if (err) throw err;
//   console.log('File deleted.');
// }); // delete a file
// mongodb connection
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://pecampelo:nicenicenice@cluster.0ndfn.mongodb.net/Cluster?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
//
//

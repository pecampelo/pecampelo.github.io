process.title = 'MyNewServer';
  var args = process.argv,
      port = args[2] | 7070,
      webServer = require('./server');

  webServer.listen(port, function() {
    console.log('Server has started!');
    console.log('Server is currently running at port ' + port);
  });

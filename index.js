var express = require('express'),
    app = express();

app.configure(function() {
    app.use(express.logger());
    app.use('/app/', express.static(__dirname + '/app/'));
    app.use(express.static(__dirname + '/app'));
});

app.listen(8080);
console.log('Express server running on http://127.0.0.1:8080');

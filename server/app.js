var express = require('express');
var app = express();
var path = require('path');
const port = 3000;



app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.resolve('todo.html'));
});
app.get('/nav', function(req, res) { res.sendFile(path.resolve('nav.html'));

})
app.get('/boot-bottom.html', function(req, res) {
    res.sendFile(path.resolve('boot-bottom.html'));
});
app.get('/boot-top.html', function(req, res) {
    res.sendFile(path.resolve('boot-top.html'));
});
app.listen(port, () => console.log(`Example app listening on port ${port}`))

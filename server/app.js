var express = require('express');
var app = express();
var path = require('path');
const port = 3000;



app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.resolve('index.html'));
});
app.get('/todo', function(req, res) {
	res.sendFile(path.resolve('todo.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}`))

var express = require('express');
var app = express();
const port = 3000;
app.get('/random.text', function(req, res) {
    res.send('random.txt');

})
app.listen(port, () => console.log(`Example app listening on port ${port}`))
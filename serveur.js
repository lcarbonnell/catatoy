const express = require('express');
const app = express();

app.get('/',function(req,res) {
    res.send('Bienvenue dans le catalogue de jouet');
});

app.listen(8081);
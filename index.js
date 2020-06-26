const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();


app.get('/holi', (res, req) => {
    res.json({
        text: 'api works!'
    });
});

app.post('/login', (req, res) => {
    const user = {id: 3};
    const token = jwt.sign({user},'myToken');
    res.json({
        token
    });
});

app.get('/api/protected', (res, req) => {
    res.json({
        text: 'protected'
    })
});

app.listen(3000, () =>{
    console.log('server on port 3000');
});

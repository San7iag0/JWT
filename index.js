const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();


app.get('/', (req, res) => {
    res.send("HOLA MUNDO");
});

const user = [
    {
        userName: "santi", 
        password: 1234

    }
]

app.post('/login', (req, res) => {
    // const user = {id: 3};
    const token = jwt.sign({user},'my_secret_token');
    res.json({
        token
    });
});


app.get('/protected', ensureToken,  (req, res) => {
    res.json({ 
        text: 'protected'
    });
});


function ensureToken(req, res, next){
    const bearerHeadder = req.header['authorization'];
        if(typeof bearerHeadder !== 'undefined'){
            const bearer = bearerHeadder.split(" ");
            const bearerToken = bearer[1];
            req.token = bearerToken;
            next(); 
        } else {
            res.sendStatus(403); 
        }
    next();
}


app.listen(3401, () => {
    console.log('server on port 3000');
});

// {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJ1c2VyTmFtZSI6InNhbnRpIn1dLCJpYXQiOjE1OTMyOTk4NzR9.iYRKq83vP1S6RlrblVY9j7UjwFpwJDPEFJofhQKlXz8"
// }
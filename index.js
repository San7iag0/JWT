const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();


app.get('/', (res, req) => {
    res.json({
        text: 'api works!'
    });
});



app.listen(3000, () =>{
    console.log('server on port 3000');
});

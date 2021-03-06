require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const routes = require('./router');

app.use(bodyParser.json());

app.use('/api', routes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Server started on port', port);
});

app.use((error, req, res, next)=>{
    res.status(500).json({error})
});


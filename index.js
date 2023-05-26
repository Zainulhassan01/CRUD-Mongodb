const express = require('express')
const bodyParser = require('body-parser')
const {connectDb} = require('./db')
const apiRoutes = require('./routes/apiRoutes')
const app = express()

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

connectDb();

app.use(
    '/api',
    apiRoutes
)

app.listen('3000', () =>{
    console.log('Listnening');
})
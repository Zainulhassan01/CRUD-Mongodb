const express = require('express')
const bodyParser = require('body-parser')
const list = require('express-list-endpoints')
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

console.log(list(app));

app.listen('3000', () =>{
    console.log('Listnening');
})
const express = require('express')
const {connectDb} = require('./db')
const users = require('./models/user')
const bodyParser = require('body-parser') 
const app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
// const users = [
//     {
//         firstName: 'Tim',
//         lastName: 'Cook',
//         admin: true,
//     }, 
//     {
//         firstName: 'dim',
//         lastName: 'dim',
//         admin: false,
//     },
//     {
//         firstName: 'dim',
//         lastName: 'dim',
//         admin: false,
//     }
// ]
// const users = []
connectDb();

app.get('/', async (req, res) => {
    const user = await users.find({})
    console.log(await users.find({}));
    // // res.render('index', {users: users.length > 0 ? users : []})
    res.send(user)
})

app.post('/', async (req, res) => {
    const {firstName, city} = req.body
    const data = new users({
        firstName,
        city
    })
    const newUser = await data.save()
    res.status(200).send(newUser)
})

app.post('/:id', async (req, res) => {
    const id = req.params.id
    const updatedData = req.body
    const updatedUser = await users.findByIdAndUpdate(id, updatedData)
    res.status(200).send(updatedUser)
})

app.delete('/:id', async (req, res) => {
    const id = req.params.id
    const deleteUser = await users.findByIdAndDelete(id)
    res.status(200).send(deleteUser)
})

app.listen('3000', () =>{
    console.log('Listnening');
})
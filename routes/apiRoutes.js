const express = require('express')
const users = require('../models/user')
const apiRoutes = express.Router()


apiRoutes.get('/', async (req, res) => {
    const user = await users.find({})
    console.log(await users.find({}));
    res.send(user)
})

apiRoutes.post('/', async (req, res) => {
    const {firstName, city} = req.body
    const data = new users({
        firstName,
        city
    })
    const newUser = await data.save()
    res.status(200).send(newUser)
})

apiRoutes.post('/:id', async (req, res) => {
    const id = req.params.id
    const updatedData = req.body
    const updatedUser = await users.findByIdAndUpdate(id, updatedData)
    res.status(200).send(updatedUser)
})

apiRoutes.delete('/:id', async (req, res) => {
    const id = req.params.id
    const deleteUser = await users.findByIdAndDelete(id)
    res.status(200).send(deleteUser)
})

module.exports = apiRoutes
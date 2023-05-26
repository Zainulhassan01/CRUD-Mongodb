const users = require('../models/user.model')

const getAllUsers = async (req,res) => {
    const user = await users.find({})
    res.send(user)
}

const createUser = async (req, res) => {
    const {firstName, city} = req.body
    const data = new users({
        firstName,
        city
    })
    const newUser = await data.save()
    res.status(200).send(newUser)
}

const updateUser = async (req, res) => {
    const id = req.params.id
    const updatedData = req.body
    const updatedUser = await users.findByIdAndUpdate(id, updatedData)
    res.status(200).send(updatedUser)
}

const deleteUser = async (req, res) => {
    const id = req.params.id
    const deleteUser = await users.findByIdAndDelete(id)
    res.status(200).send(deleteUser)
}

module.exports = {getAllUsers, createUser, updateUser, deleteUser}
const express = require('express')
const apiRoutes = express.Router()
const  {getAllUsers, createUser, updateUser, deleteUser} = require('../controller/userController')

apiRoutes.get('/', 
    (req, res) => getAllUsers(req, res)
)

apiRoutes.post('/', 
    (req, res) => createUser(req, res)
)

apiRoutes.post('/:id', 
    (req, res) => updateUser(req, res)
)

apiRoutes.delete('/:id', 
    (req, res) => deleteUser(req, res)
)

module.exports = apiRoutes
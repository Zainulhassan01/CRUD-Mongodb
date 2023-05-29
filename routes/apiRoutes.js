const express = require('express')
const apiRoutes = express.Router()
const userSchema = require('../validator/userValidator')
const schemaValidator = require('../utils/schemaValidator')
const  {getAllUsers, createUser, updateUser, deleteUser} = require('../controller/userController')

apiRoutes.get('/', 
    (req, res) => getAllUsers(req, res)
)

apiRoutes.post('/', 
    schemaValidator(userSchema),
    (req, res) => createUser(req, res)
)

apiRoutes.post('/:id',
    (req, res) => updateUser(req, res)
)

apiRoutes.delete('/:id', 
    (req, res) => deleteUser(req, res)
)

module.exports = apiRoutes
const schemaValidator = (userSchema) =>(req, res, next) => {
    const { error } = userSchema.validate(req.body)
    if(error) {
        res.status(400).send(error)
    }
    else {
        next()
    }
}

module.exports = schemaValidator

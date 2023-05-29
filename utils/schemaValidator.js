const schemaValidator = (userSchema) =>(res, req, next) => {
    const { error } = userSchema.validate(req.body)
    if(error) {
        res.send(error)
    }
    else {
        next()
    }
}

module.exports = schemaValidator

const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const userSchema =  new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        trim: true,
    }
},
{
    timestamps: true
}
);
const Users = mongoose.model("sample", userSchema);
module.exports = Users;
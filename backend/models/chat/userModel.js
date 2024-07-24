const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    img: {type: String, required: true},
    status: {type: String, required: true},
    position: {type: String, required: true},
    about: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    avai: {type: String, required: true},
})

let userModel = mongoose.model("User", userSchema)
module.exports = userModel
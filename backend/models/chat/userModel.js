const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    img: {type: String, default:""},
    status: {type: String, default:""},
    position: {type: String, default:""},
    about: {type: String, default:""},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: String,default:""},
    avai: {type: String,default:""},
})

let userModel = mongoose.model("User", userSchema)
module.exports = userModel
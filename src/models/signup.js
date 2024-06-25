const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:Number,
        required:true
    },
    confirm_password:{
        type:Number,
        required:true
    }

})

/* userSchema.statics.findByCredentials = (email,password) => {
    const user = User.findOne({email})
    if(!user){
        throw new Error('Unable to login')
    }
    return user
} */

const User = new mongoose.model('User',userSchema);
module.exports = User
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/participants',{
    useNewUrlParser:true
}).then(()=>{
    console.log('Connection Successful')
}).catch(()=>{
    console.log('Connection failed')
})

/* const User = mongoose.model('User',{
    name:{
        type:String
    },
    age:{
        type:Number
    }
})
const me = new User({
    name:'Fayzul',
    age:22
})

me.save() */
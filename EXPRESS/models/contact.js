const mongoose = require('mongoose')

const contactmodel =new mongoose.schema({})
name:{
    type:string,
    unique:true,/
    required:true
},
phone:{
    type: string,
    unique:true,
    required: true 
}
})

const contacts = mongoose.model("contacts",contactmodel)
module.exports = contacts



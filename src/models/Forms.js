const {Schema, model} = require('mongoose')

const FormSchema =new Schema({
   name: {
       type:String,
       required: true,
       unique:true
   },
   date:{
    type:Date,
    default: Date.now
   },
   username:{
       type:String,
       required:true
   } 
},{
    timestamps:true
});

module.exports = model('Form',FormSchema);
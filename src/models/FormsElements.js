const {Schema, model} = require('mongoose')

const FormElementsSchema =new Schema({
   name: {
       type:String,
       required: true
   } ,
   type:{
        type:String,
        required: true
   } ,
   required:{
        type:Boolean,
        required: true
   },
   value:{
       type:String
   },
   nameForm:{
     type:String,
     required:true
   }

},{
    timestamps:true
});

module.exports = model('FormElements',FormElementsSchema);
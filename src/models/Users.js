const {Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs');
require('dotenv').config();

const UserSchema =new Schema({
   name:{
       type:String,
       required: true,
       trim:true
   }, 
   email:{
       type:String,
       required:true,
       unique:true
   },
   password:{
        type:String,
        required:true
   }
},{
    timestamps:true
});

UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password , salt);
}

UserSchema.methods.confirmPassword = function(password) {
    return bcrypt.compare(password , this.password);
}

module.exports = model('Users',UserSchema);
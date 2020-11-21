const userCtrl ={};

const Users = require('../models/Users');

userCtrl.createUser = async (req,res) => {
    const {name, email , password} = req.body;
    const userEmail = await Users.findOne({email:email})
    if(userEmail){
        return res.json({
            status: false,
            message: "Email already exists"
        })
    }else{
    const newUSer = new Users({
        name,
        email,
        password
    });
    newUSer.password = await newUSer.encryptPassword(password);
    await newUSer.save();
    return res.json({
        status: true,
        message: "User registered succesfully"
    })
}
}
 
userCtrl.getUsers = async (req,res) => {
    const {email,password} = req.body;
    const user = await Users.findOne({email:email});
    if(!user){
        return res.json({
            auth: false,
            message: 'Username or password incorrect'
        })
    } 
    const autenticate = user.confirmPassword(password);
    if  (!autenticate) {
        return res.json({
            auth: false,
            message: 'Username or password incorrect'
        })
          }
          return res.json({
            auth: true,
            user
        })
        }

 
 module.exports = userCtrl; 
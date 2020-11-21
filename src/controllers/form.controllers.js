const formCtrl ={};

const Forms = require('../models/FormsElements');

 formCtrl.getForm = async (req,res) => {
    const form = await Forms.findById(req.params.id);
    res.json(form);
 }

 formCtrl.getForms = async (req,res) => {
    const from = await Forms.find();
    res.json(from);
 }

 formCtrl.createForm = async (req,res) => {
    const {name, username, date} = req.body;
    const newForm = new Forms({
        name,
        username,
        date
    });
    await newForm.save();
    res.json({status: true, message: "Form Saved"})
 }

 formCtrl.updateForm = async (req,res) => {
    const {name, date} = req.body;
    const form = await Forms.findOneAndUpdate(req.params.id, {
        name,
        date
    });
    res.json(form);
 }
 
 formCtrl.deleteForm = async (req,res) => {
    const form = await Forms.findByIdAndDelete(req.params.id)
    res.json({message:'Form Eliminado'})
 }
 
 module.exports = formCtrl; 
const { Router } = require ('express');
const router = Router();

const {getForm, getForms, createForm,updateForm,deleteForm} = require('../controllers/form.controllers');

router.route('/')
.get(getForms)
.post(createForm)

router.route('/:id')
.get(getForm)
.put(updateForm)
.delete(deleteForm)

module.exports = router;
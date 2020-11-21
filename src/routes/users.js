const { Router } = require ('express');
const router = Router();

const {getUsers, createUser} = require('../controllers/users.constrollers');

router.post('/singin',getUsers)
router.post('/singup',createUser)
//Actualizar un solo dato patch
//.patch()

module.exports = router;

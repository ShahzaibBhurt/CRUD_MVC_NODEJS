const express = require('express');
const userController = require('../controller/userController')
const router = express.Router()

router.get('/', userController.getUsers);
router.post('/', userController.addUser);
router.put('/', userController.updateUser);
router.delete('/', userController.deleteUser);

module.exports = router;
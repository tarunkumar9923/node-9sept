const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/users', (req, res) => {
    UserController.getUser(req, res)
})
//localhost:3000/user/10
router.get('/user/:id',(req,res)=>{
    UserController.getParticularUser(req,res)
})
module.exports = router;

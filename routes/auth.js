const express = require('express')
const router=express.Router()
const verfiedUser=require('../middlewareToken/verifiedUser')

const {userSign,userLogin,userSignOut}=require('../controllers/auth')

router.post('/signup',userSign)
router.post('/signin',userLogin)
router.get('/signout',userSignOut)


module.exports=router



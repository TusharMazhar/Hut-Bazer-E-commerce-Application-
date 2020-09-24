const express = require('express')
const router=express.Router()
const verfiedUser=require('../Token/verifiedUser')

const {userSign,userLogin,allProduct}=require('../controllers/user')

router.post('/register',userSign)
router.post('/login',userLogin)
router.get('/product',verfiedUser,allProduct)


module.exports=router
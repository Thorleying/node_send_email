const express=require('express')
//创建一个路由对象
const router=express.Router();
const sendMail=require('../handler/mail')
router.post('/send_mail',sendMail.sendMail)
router.post('/login',sendMail.login_by_email)
// 将路由对象共享出去
module.exports = router
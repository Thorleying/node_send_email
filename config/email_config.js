const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  auth: {
    user: 'xxx', //邮箱账号
    pass: "xxxxxxxxx" //授权码
  }
})

let mail = {
  send(mail, content) {
    // 邮件服务器准备
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error)
      } else {
        console.log(`${mail} 发送成功`)
      }
    })
    transporter.sendMail({
      from: 'xxx', //你的邮箱账户
      to: `${mail}`,
      subject: '【前端范范工作室】',
      html: `${content}`,
    })
  }
}
module.exports = mail

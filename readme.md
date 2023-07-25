# 邮箱验证码登录实现

## 1.首先开启qq的SMTP的一个邮箱的服务

## 2.配置文件

`./config/email_config.js`
```
let transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  auth: {
    user: 'xxx', //邮箱账号
    pass: "xxxxxxxxx" //授权码
  }
})
```
当开启邮箱的smtp服务之后，你的邮箱账号和授权密码进行填充。

```
    transporter.sendMail({
      from: 'xxx', //你的邮箱账户
      to: `${mail}`,
      subject: '【前端范范工作室】',
      html: `${content}`,
    })
```

`./config/db.js`

配置一下你的数据库

```
const mysql=require('mysql')
const db=mysql.createPool({
    host: 'localhost',    // 数据库的地址
    user: 'test_login',         // 数据库用户名
    password: 'test_login',     // 数据库密码
    database: 'test_login'   // 数据库名称
})
//
module.exports=db
```
其次将from里填写你的邮箱,到此就将配置几乎完善好了。

## 3.项目启动

### 1.首先安装依赖
```
npm i
```
### 2.启动项目
```
npm run dev
```
## 注：代码还可以进行完善，可以自己进行改善，若有不足，请多多指教
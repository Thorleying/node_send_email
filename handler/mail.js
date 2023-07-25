const db=require('../config/db')

//导入邮箱配置
const mail=require('../config/email_config')
//验证码
const code=require('../random')

exports.sendMail=(req,res)=>{
    let email_user=req.query.email
    let time=code.time()
    let codeYz=code.yzm()
    const message=`
    <div class="email_warp" style="height: 100vh;min-height: 500px;font-size: 14px;color: #212121;display: flex;justify-content: center;">
    <div id="reset-password-email" style="display: block;margin-bottom: 20px;max-width: 500px;">
      【前端范范工作室】尊敬的用户，欢迎使用前端范范工作室的平台，您此次登录的验证码为<b class="accout_email" style=" color: #4C84FF;font-size:20px">${codeYz}</b>，3分钟内有效，请及时输入。
      <p style='font-weight:bold;'>发送时间${time}</p>
      <p style='color:red'>请注意，如果这不是您本人的操作，请忽略并关闭此邮件。</p>
      <div class="warm_tips">

        <div class="qr_warp" style=" max-width: 100%;max-height: 100%;margin: 20px auto;">
          <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.MO9kKuliwR3AlBcVAxgsTgHaHa?pid=ImgDet&rs=1" alt="微信二维码图片">
        </div>
        <p>本邮件由系统自动发送，请勿回复。</p>
      </div>
    </div>
  </div>
    `
    // 是否获取过验证码
    const sql='select * from demo where username=?'
    db.query(sql,email_user,(err,results)=>{
      if (results.length >= 1){
        let sqlStr='update demo set yzm=? where username=?'
        db.query(sqlStr, [codeYz,email_user], (err, results) => {
          // 执行 SQL 语句失败
          if (err) res.send(err)
          // 执行 SQL 语句成功，但是影响行数不等于 1
          if (results.affectedRows !== 1)  console.log('二次获取验证码更新失败')
          mail.send(email_user,message)
          res.send({
            status:0,
            message:`${email_user}发送成功`,
          })
        })
      }else{
        let insertSql='insert into demo values(?,?,?,?)'
        db.query(insertSql,[null,email_user,codeYz,null],(err,results)=>{
          if (err){
             return res.send(err)
          }
          if (results.affectedRows !== 1) return console.log('初次验证码发送失败')
          mail.send(email_user,message)
          res.send({
            status:0,
            message:`${email_user}发送成功`,
          })
        })
      }
    })
}

exports.login_by_email=(req,res)=>{
  let username=req.body.username;
  let yzm=req.body.yzm;
  const sql='select username,yzm,time from demo where username= ?'
  db.query(sql,username,(err,results)=>{
    if (err){
       return res.send(err)
    }
    //如果存在验证码 判断是否过期
    if (results.length == 1){
      if(username===results[0].username&&yzm===results[0].yzm){
        let timeSql='SELECT TIMESTAMPDIFF(SECOND,?,now()) as time'
        db.query(timeSql,code.tranTime(results[0].time),(err,results)=>{
          console.log(results[0].time,'验证码时间')
          if(results[0].time>180){
            res.send({
              status:1,
              message:"验证码过期"
            })
            db.query('update demo set yzm="" where username=?',username)
          }else{
            res.send({
              status:0,
              message:"登录成功"
            })
            //登录成功 验证码设置为空
            let zeroSql='update demo set yzm="" where username=?'
            db.query(zeroSql,username)
          }
        })
      }else{
        res.send({
          status:0,
          message:"验证码错误"
        })
      }
    }
  })
}
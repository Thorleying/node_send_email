const mysql=require('mysql')
const db=mysql.createPool({
    host: 'localhost',    // 数据库的地址
    user: 'test_login',         // 数据库用户名
    password: 'test_login',     // 数据库密码
    database: 'test_login'   // 数据库名称
})
//
module.exports=db
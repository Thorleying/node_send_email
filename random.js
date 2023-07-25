let generateCode= {
  yzm(){
    const codeLength = 6; // 验证码长度为6

  let code = "";
  for (let i = 0; i < codeLength; i++) {
    const randomNum = Math.floor(Math.random() * 10); // 随机生成数字
    code += randomNum; // 将随机数字加入验证码字符串
  }
  return code;
  },
  time(){
    const now = new Date();
    const year = now.getFullYear(); // 获取当前年份
    const month = now.getMonth() + 1; // 获取当前月份（注意，月份从0开始，需要加1）
    const day = now.getDate(); // 获取当前日期
    const hour = now.getHours(); // 获取当前小时
    const minute = now.getMinutes(); // 获取当前分钟
    const second = now.getSeconds(); // 获取当前秒数
  
    return (`${year}-${month}-${day} ${hour}:${minute}:${second}`);
  },
  tranTime(timestamp){
    let a = new Date(timestamp).getTime();
    const date = new Date(a);
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '  ';
    const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    // const s = date.getSeconds(); // 秒
    const dateString = Y + M + D + h + m;
    // console.log('dateString', dateString); // > dateString 2021-07-06 14:23
    return dateString;
  }
}
module.exports=generateCode

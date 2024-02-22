/**
 * @Name：admin 验证方法
 * @Author：陈晨
 */

/**
 * @description 验证是否为电话号码
 */
export function isValidatePhone(phone:string):boolean {
  return /^1[3456789]\d{9}$/.test(phone);
}

/**
 * @description 验证是否为数字和字母组合
 */
export function isNumAndLetter(str:string):boolean {
  return /^[0-9a-zA-Z]+$/.test(str);
}

/**
 * @description 验证是否全是字母
 */
export function isValidateLetter(value:string):boolean {
  return /^[a-z|A-Z]*$/g.test(value);
}

/**
 * @description 验证是否全是字母与数字组合且以字母开头
 */
export function isLetterAndNum(value:string):boolean {
  return /^[a-zA-Z][a-zA-Z0-9]*$/g.test(value);
}

/**
 * @description 验证身份证号格式
 */
export function isValidateIdCard(idcode:string):boolean {
  idcode = idcode.toUpperCase();
  // 加权因子
  let weight_factor:number[] = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  // 校验码
  let check_code:string[] = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
  let code:string = idcode + "";
  let last:string = idcode[17];//最后一个
  let seventeen:string = code.substring(0, 17);
  // ISO 7064:1983.MOD 11-2
  // 判断最后一位校验码是否正确
  let arr:string[] = seventeen.split("");
  let len:number = arr.length;
  let num:number = 0;
  for (let i:number = 0; i < len; i++) {
    num = num + arr[i] * weight_factor[i];
  }
  // 获取余数
  let resisue:number = num % 11;
  let last_no:string = check_code[resisue];
  // 格式的正则
  // 正则思路
  /*
   第一位不可能是0
   第二位到第六位可以是0-9
   第七位到第十位是年份，所以七八位为19或者20
   十一位和十二位是月份，这两位是01-12之间的数值
   十三位和十四位是日期，是从01-31之间的数值
   十五，十六，十七都是数字0-9
   十八位可能是数字0-9，也可能是X
   */
  let idcard_patter:RegExp = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;
  // 判断格式是否正确
  let format:boolean = idcard_patter.test(idcode);
  // 返回验证结果，校验码和格式同时正确才算是合法的身份证号码
  return last === last_no && format;
}

/**
 * @description 验证是否为邮箱
 */
export function isValidateEmail(email:string):boolean {
  return /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email);
}



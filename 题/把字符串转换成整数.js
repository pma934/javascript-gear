// 将一个字符串转换成一个整数(实现Integer.valueOf(string)的功能，但是string不符合数字要求时返回0)，
// 要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0。

function StrToInt(str) {
    let list = str.split('');
    let flag;
    switch (list[0]) {
        case '+':
            flag = 1;
            break;
        case '-':
            flag = -1;
            break;
        default:
            flag = 0;
            break;
    }
    let number = 0;
    for (let i = Math.abs(flag); i < list.length; i++) {
        if (48 <= list[i].charCodeAt() && list[i].charCodeAt() <= 57) {
            let n = list[i].charCodeAt() - 48;
            number = number * 10 + n;
        } else {
            return 0
        }
    }
    if (flag) {
        return number * flag
    } else {
        return number
    }
}
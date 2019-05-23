//写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。
function Add(num1, num2) {
    add = num1^num2
    carry = (num1&num2)<<1
    if(carry){
        return Add(add, carry)
    }else{
        return add
    }
}



let p = Add(10, 12)

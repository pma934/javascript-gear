/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = []
    let len = s.length
    let flag = true
    for(let i=0;i<len;i++){
        if(!flag){
            break;
        }
        switch(s[i])
        {
            case '(':arr.push(')');break;
            case '[':arr.push(']');break;
            case '{':arr.push('}');break;
            case ')':flag = arr.pop() === ")"?true:false;break;
            case ']':flag = arr.pop() === "]"?true:false;break;
            case '}':flag = arr.pop() === "}"?true:false;break;
        }
    }
    if(!flag||arr.length){
        return false
    }else{
        return true
    }
};

p = isValid("()")

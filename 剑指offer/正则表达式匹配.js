
// 请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 在本题中，匹配是
// 指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配
//s, pattern都是字符串
function match(s, pattern) {
    if (s == '') {
        if (pattern.length ==0) {
            return true
        }else{
            if (pattern[1] == '*') {
                return match(s, pattern.slice(2))
            }else{
                return false
            }
        } 
    }
    else if (s[0] == pattern[0] || pattern[0] == '.') {
        if (pattern[1] == '*') {
            return match(s.slice(1), pattern) || match(s, pattern.slice(2))
        } else {
            return match(s.slice(1), pattern.slice(1))
        }
    } else {
        if (pattern[1] == '*') {
            return match(s, pattern.slice(2))
        }
        return false
    }
}

p = match("a",".*..a*")

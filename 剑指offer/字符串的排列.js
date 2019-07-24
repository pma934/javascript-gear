// 输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
function Permutation(str)
{
    if(!str){
        return []
    }
    var List = []
    var chars = [...str]
    getstr(chars,'',List)

    return List
}

function getstr(chars,l,List){
    if(!chars.length){
        List.push(l)
    }
    else{
        let used = []
        for(i in chars){
            copyChars = [...chars]
            let q = copyChars.splice(i,1)[0]
            if(used.indexOf(q)==-1){
                getstr(copyChars,l+q,List)
                used.push(q)
            } 
        }
    }
}

var p = Permutation('aaaaaaaa')

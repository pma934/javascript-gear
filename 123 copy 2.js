var data = {"name":"Han Meimei","gender":"男"}

var input = "<% name %>，欢迎来到这里，祝你早日找到<% gender %>盆友！"
var out = "Han Meimei，欢迎来到这里，祝你早日找到男盆友！"

p = input.replace(/<% (\w*) %>/g,function(_,$1){console.log($1);return data[$1]})
console.log(p)
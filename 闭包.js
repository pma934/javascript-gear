var f1 = function () {
    return console.log('f1');
}(); //不是闭包

var f2 = ()=> console.log('f2');
//闭包

var f3 = ()=> {console.log('f3')};

var templating = (a) => {
    var env = a;
    return (ctx) => {
        chen = ctx * env;
        console.log(chen);
    }
}
f2();
f3();

var ctx = templating(9);
ctx(5);

module.exports = {

};
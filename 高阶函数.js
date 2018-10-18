var add = function (a, b) {
    if (b == undefined)
        b = 0;
    return a + b;
}

var chen = function (a, b) {
    if (b == undefined)
        b = 1;
    return a * b;
}

var Alljs = function (array, f) {
    var p;
    for(var k=0;k<array.length;k++){
        p=f(array[k],p);
    }
    //console.log(p);
    return p;
}

//Alljs([2,3,4],add);
//Alljs([2,3,4],chen);

var Alladd = x=> Alljs(x,add);
var Allchen = x=> Alljs(x,chen);

module.exports = {
    add:Alladd,
    chen:Allchen,
};
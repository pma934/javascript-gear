function deepClone(oldObj) {
    let type = Object.prototype.toString.call(oldObj)
    let newObj;
    switch (type) {
        case '[object Array]':
            newObj = []
            break;
        case '[object Object]':
            newObj = {}
            break;
        default:
            //newObj = oldObj
            return oldObj
    }
    for(key in oldObj){  //String也会触发for in所以出现爆栈
        newObj[key] = arguments.callee(oldObj[key])
        // newObj[key] = typeof oldObj[key] === 'object' ? arguments.callee(oldObj[key]) : oldObj[key]
    }
    return newObj
}

//~~~~~~~~~

function person(pname) {
    this.name = pname;
  }
  
  const Messi = new person('Messi');
  
  function say() {
    console.log('hi');
  }
  
  const oldObj = {
    a: say,
    c: new RegExp('ab+c', 'i'),
    d: Messi,
  };
  


//   oldObj.b = oldObj;  //循环引用拷贝不了

  
  const newObj = deepClone(oldObj);
  console.log(newObj.a, oldObj.a); // [Function: say] [Function: say]
  console.log(newObj.b, oldObj.b); // { a: [Function: say], c: /ab+c/i, d: person { name: 'Messi' }, b: [Circular] } { a: [Function: say], c: /ab+c/i, d: person { name: 'Messi' }, b: [Circular] }
  console.log(newObj.c, oldObj.c); // /ab+c/i /ab+c/i
  console.log(newObj.d.constructor, oldObj.d.constructor); 
  

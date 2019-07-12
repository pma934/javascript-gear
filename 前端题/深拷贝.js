function deepClone(oldObj, hash = new WeakMap()) {
  if (Object.prototype.toString.apply(oldObj) === "[object RegExp]") {
    return new RegExp(oldObj)
  }
  if (Object.prototype.toString.apply(oldObj) === "[object Date]") {
    return new Date(oldObj)
  }
  if (oldObj === null || typeof oldObj !== "object") {
    return oldObj
  }

  let newObj = new oldObj.constructor()
  if (hash.has(oldObj)) {
    return hash.get(oldObj)
  }
  hash.set(oldObj, newObj)
  for (let key in oldObj) {
    let o = oldObj[key]
    newObj[key] = deepClone(o, hash)
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



oldObj.b = oldObj; //循环引用拷贝不了


const newObj = deepClone(oldObj);
console.log(newObj.a, oldObj.a); // [Function: say] [Function: say]
console.log(newObj.b, oldObj.b); // { a: [Function: say], c: /ab+c/i, d: person { name: 'Messi' }, b: [Circular] } { a: [Function: say], c: /ab+c/i, d: person { name: 'Messi' }, b: [Circular] }
console.log(newObj.c, oldObj.c); // /ab+c/i /ab+c/i
console.log(newObj.d.constructor, oldObj.d.constructor);
function deepClone(obj,hash = new WeakMap()){
    if(obj instanceof RegExp) return new RegExp(obj);
    if(obj instanceof Date) return new Date(obj);
    if(obj === null ||typeof obj !== 'object'){
        return obj;
    }
    if(hash.has(obj)){
        return hash.get(obj);
    }
    let t = new obj.constructor();//根据情况生成[]或者{}
    hash.set(obj,t)
    for(let key in obj){
        t[key] = deepClone(obj[key],hash) 
    }
    return t
}


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
  


  oldObj.b = oldObj;  //循环引用拷贝不了

  
  const newObj = deepClone(oldObj);
  console.log(newObj.a, oldObj.a); // [Function: say] [Function: say]
  console.log(newObj.b, oldObj.b); // { a: [Function: say], c: /ab+c/i, d: person { name: 'Messi' }, b: [Circular] } { a: [Function: say], c: /ab+c/i, d: person { name: 'Messi' }, b: [Circular] }
  console.log(newObj.c, oldObj.c); // /ab+c/i /ab+c/i
  console.log(newObj.d.constructor, oldObj.d.constructor); 
  

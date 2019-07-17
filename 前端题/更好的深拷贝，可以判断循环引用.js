function deepClone(oldObj,hash = new WeakMap()){
    if(oldObj instanceof RegExp) return new RegExp(oldObj);
    if(oldObj instanceof Date) return new Date(oldObj);
    if(oldObj === null ||typeof oldObj !== 'oldObject'){
        return oldObj;
    }
    if(hash.has(oldObj)){
        return hash.get(oldObj);
    }
    let newObj = new oldObj.constructor();//根据情况生成[]或者{}
    hash.set(oldObj,newObj)
    for(let key in oldObj){
        //可能会遍历到原型的对象
        if(oldObj.hasOwnProperty(key)){
          newObj[key] = deepClone(oldObj[key],hash) 
        }
    }
    return newObj
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
  

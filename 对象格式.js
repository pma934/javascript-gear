var type = function (v) {
    return [Object.prototype.toString.call(v),  typeof v , Object(v)==Object(v)];
};
                          
console.log(type(null));                // '[object Null]', 'object', false 
console.log(type(undefined));           // '[object Undefined]', 'undefined', false 
console.log(type(1));                   // '[object Number]', 'number', false 
console.log(type(true));                // '[object Boolean]', 'boolean', false 
console.log(type("2"));                 // '[object String]', 'string', false 
console.log(type([1, 2, 3]));           // '[object Array]', 'object', true 
console.log(type({"name": "zhuhui"}));  // '[object Object]', 'object', true 
console.log(type(type));                // '[object Function]', 'function', true 
console.log(type(new Date()));          // '[object Date]', 'object', true 
console.log(type(/^\d+$/));             // '[object RegExp]', 'object', true 
console.log(type(Symbol()));            // '[object Symbol]', 'symbol', false 
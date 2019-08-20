new Promise((resolve,reject)=>{
    // setTimeout(()=>{
        resolve("成功")
    // },3000)/
}).then((d1)=>{
    console.log(d1);
    return new Promise((resolve,reject)=>{
        resolve(new Promise((resolve,reject)=>{
            resolve("111")
        }));
    })
},(r1)=>{
    console.log(r1);
    return r1;
}).then((d2)=>{
    console.log(d2);
},(r2)=>{
    console.log(r2);
})
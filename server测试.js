const Koa = require('koa');
const app = new Koa();
const koaBody = require('koa-body');
const path = require('path')

app.use(koaBody({
    multipart: true, // 支持文件上传
    encoding: 'gzip',
    formidable: {
        uploadDir: path.join(__dirname, 'pic/'), // 设置文件上传目录
        keepExtensions: true, // 保持文件的后缀
        maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
        onFileBegin: (name, file) => { // 文件上传前的设置
            console.log(`name: ${name}`);
            console.log(file);
        },
    }
}));

// logger
app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    ctx.set('Access-Control-Allow-Origin', `*`);
});

// response

app.use(async ctx => {
    // let data = await getPostData(ctx)
    console.log(ctx.request.body)
    ctx.body = 'Hello World';
});

console.log('listen 3000!')
app.listen(3000);


// getPostData = function (ctx) {
//     return new Promise((resolve, reject) => {
//         try {
//             let str = ''
//             ctx.req.on('data', (chunk) => {
//                 str += chunk
//             })
//             ctx.req.on('end', (chunk) => {
//                 resolve(str)
//             })
//         } catch (err) {
//             reject(err)
//         }
//     })

// }
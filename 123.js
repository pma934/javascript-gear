// 写一个js函数，实现对一个数字每3位加一个逗号，如输入100000，输出100,000(不考虑负数，小数)

function main(num) {

    let res = num.toString()
    // let left = res.slice(0, res.length % 3)
    // if (left.length) {
    //     left = left + ','
    // }
    // let right = res.slice(res.length % 3)
    // right = right.replace(/(\d{3})/g, $1 => $1 + ',')


    //return (left + right).slice(0, -1)
    return res.length%3?res.replace(/(?=([\d]{3})+$)/g, ','):res.replace(/(?=([\d]{3})+$)/g, ',').slice(1)
}

var str = main(123245267)

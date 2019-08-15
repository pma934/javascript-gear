var nums = [4,3,2,1];
var k = 1

// var maxSumOfThreeSubarrays = function (nums, k) {
//     let sum = {}
//     sum[0] = nums.slice(0,k).reduce((x,y)=>x+y)
//     for(let i=0;i<nums.length-k;i++){
//         sum[i+1] = sum[i] - nums[i] + nums[i+k]
//     }
//     let keys = Object.keys(sum).sort((x,y)=>sum[y]-sum[x])
//     for(let i = 0;i<keys.length;i++){
//         for(let j=0;j<keys.length;j++){
//             for(let k=0;k<keys.length;k++){
//                 if(+keys[i]+2<=keys[j]&&+keys[j]+2<=keys[k]){
//                     return [+keys[i],+keys[j],+keys[k]].sort((x,y)=>x-y)
//                 }
//             }
//         }
//     }
// };

var maxSumOfThreeSubarrays = function (nums, k) {
    //dp[i][n] 前i个数分割成n个数组的最大和                   |这后面是重复的结构  
    //dp[i][n] = max( dp[i-1][n] , dp[i-k][n-1]+[i-k+1,i] , dp[i-k-1][n-1]+[i-k,i-1] ,……，dp[(n-1)k][n-1]+[(n-1)k+1,nk] )
    //dp[i-1][n] = max( dp[i-2][n] , dp[i-k-1][n-2]+[i-k+,i-1] , dp[i-k-2][n-1]+[i-k-1,i-2] ,……，dp[(n-1)k][n-1]+[(n-1)k+1,nk] )

    //由此可得 dp[i][n] = max(dp[i-1][n] , dp[i-k][n-1]+[i-k+1,i])

    const dp = new Array(nums.length + 1).fill(null).map(() => new Array(3 + 1).fill(0))
    //前i个数的和
    var sum = []
    sum[0] = 0
    for (let i = 1; i <= nums.length; i++) {
        sum[i] = sum[i - 1] + nums[i - 1]
    }
    //dp 计算
    for (let n = 1; n <= 3; n++) {
        for (let i = k * n; i <= nums.length; i++) {
            dp[i][n] = Math.max(dp[i - 1][n], dp[i - k][n - 1] + sum[i] - sum[i - k])
        }
    }


    var res = []
    var i = nums.length
    var n = 3
    var v = dp[i][n]
    while(res.length<3){
        if(dp[--i][n]!==v){
            //第n个数组的尾部下标是i-1+1，所以头是i-1+1 -k+1 = i-k+1
            res.push(i-k+1)
            i = i-k+1
            v = dp[i][--n]
        }
    }

    return res.reverse()
};


p = maxSumOfThreeSubarrays(nums, k)

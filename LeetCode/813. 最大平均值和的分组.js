/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
A = [9,1,2,3,9]
K = 3

//dp：前i个数分成j份
var largestSumOfAverages = function(A, K) {
    var len = A.length
    var dp = Array(len+1).fill(1).map(()=>[])
    var sum = [0] //和存一下
    for(let i=1;i<=len;i++){
        sum[i] = sum[i-1] + A[i-1]
        dp[i][1] = sum[i]/i
        for(let j=2;j<=i&&j<=K;j++){
            for(let k=1;k<i;k++){
                dp[i][j] = Math.max(dp[i][j]||0, (sum[i]-sum[i-k])/k + (dp[i-k][j-1]||0))
            }
        }
    }
    return dp[len][K]
};

var p = largestSumOfAverages(A,K)

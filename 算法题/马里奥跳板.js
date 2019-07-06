//马里奥通过跳板到达终点，跳板可以向前或者向后越过一定距离，
//非跳板位置为悬崖，通过0来标识，跳板数字为可以越过的距离，
//终点在最右侧，随机在一个点出生，问最少几次能到终点，如果不能到达输出-1
// 
function xxx(len, born, maps) {
    maps.push('*')

    var mark = maps.map(x => x === 0 ? 0 : -1)
    mark[born - 1] = 0

    var starts = [born - 1]
    var time = 0
    //
    while (true) {
        time++
        var newStarts = []

        for (index of starts) {
            var jump = maps[index]
            let i = index + jump + 1
            if (i >= len) {
                mark[len] = time
                break;
            }
            for (let min = Math.max(0, index - jump - 1); i >= min; i--) {
                if (mark[i] === -1) {
                    mark[i] = time
                    newStarts.push(i)
                }
            }
        }
        starts = newStarts
        if (mark[len] !== -1) {
            break;
        }
        if (starts.length === 0) {
            time = -1
            break;
        }
    }

    console.log(time)
}



var len = 7
var born = 4
var maps = [10, 0, 2, 1, 1, 0, 1]




xxx(len, born, maps)
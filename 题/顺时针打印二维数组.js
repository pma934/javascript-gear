matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];


function printMatrix(matrix) {
    let res = []
    let state = 0

    while (matrix != null && matrix[0] != null) {
        switch (state) {
            case 0:
                state++
                res = res.concat(matrix.splice(0, 1)[0])
                break;
            case 1:
                state++
                for (m of matrix) {
                    res = res.concat(m.splice(-1, 1))
                }
                break;
            case 2:
                state++
                res = res.concat(matrix.splice(-1, 1)[0].reverse())
                break;
            case 3:
                state = 0
                let l = []
                for (m of matrix) {
                    l = l.concat(m.splice(0, 1))
                }
                res = res.concat(l.reverse())
                break;
        }
    }

    console.log(res)
    return res

}



printMatrix(matrix)
function hasPath(matrix, rows, cols, path) {
    function haveNext(index, _matrix, _path) {
        index = index * 1
        if (!_path.length) {
            return true
        }
        let up, down, left, right,m;
        if (index - cols >= 0) {
            if (_matrix[index - cols] == _path[0]) {
                m = _matrix.slice(0,index - cols)+'-'+_matrix.slice(index - cols +1)
                up = arguments.callee(index - cols, m,_path.slice(1))
            } else {
                up = false
            }
        } else {
            up = false
        }
        if (index + cols <= _matrix.length - 1) {
            if (_matrix[index + cols] == _path[0]) {
                m = _matrix.slice(0,index + cols)+'-'+_matrix.slice(index + cols +1)
                down = arguments.callee(index + cols, m,_path.slice(1))
            } else {
                down = false
            }
        } else {
            down = false
        }
        if (index % cols != 0) {
            if (_matrix[index - 1] == _path[0]) {
                m = _matrix.slice(0,index - 1)+'-'+_matrix.slice(index - 1 +1)
                left = arguments.callee(index - 1, m,_path.slice(1))
            } else {
                left = false
            }
        } else {
            left = false
        }
        if ((index + 1) % cols != 0) {
            if (_matrix[index + 1] == _path[0]) {
                m = _matrix.slice(0,index + 1)+'-'+_matrix.slice(index + 1 +1)
                right = arguments.callee(index + 1, m,_path.slice(1))
            } else {
                right = false
            }
        } else {
            right = false
        }
        return up || down || left || right
    }

    for (i=0;i<matrix.length;i++) {
        if (matrix[i] == path[0]) {
            let m = matrix.slice(0,i)+'-'+matrix.slice(i+1)
           if(haveNext(i, m, path.slice(1))){
               return true
           }
        }
    }
    return false
}



let str = 'a b c e s f c s n d e e'
let matrix = str.split(' ')

let p = hasPath("ABCESFCSADEE",3,4,"ABCCED")

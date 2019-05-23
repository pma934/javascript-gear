var Input = [
    [".", ".", "9", "7", "4", "8", ".", ".", "."],
    ["7", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", "2", ".", "1", ".", "9", ".", ".", "."],
    [".", ".", "7", ".", ".", ".", "2", "4", "."],
    [".", "6", "4", ".", "1", ".", "5", "9", "."],
    [".", "9", "8", ".", ".", ".", "3", ".", "."],
    [".", ".", ".", "8", ".", "3", ".", "2", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", "2", "7", "5", "9", ".", "."]
]

var Input2 = [
    ["1", ".", ".", ".", "7", ".", ".", "3", "."],
    ["8", "3", ".", "6", ".", ".", ".", ".", "."],
    [".", ".", "2", "9", ".", ".", "6", ".", "8"],
    ["6", ".", ".", ".", ".", "4", "9", ".", "7"],
    [".", "9", ".", ".", ".", ".", ".", "5", "."],
    ["3", ".", "7", "5", ".", ".", ".", ".", "4"],
    ["2", ".", "3", ".", ".", "9", "1", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", "4", "3"],
    [".", "4", ".", ".", "8", ".", ".", ".", "9"]
]


var solveSudoku = function (board) {
    const ALL = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var threeXthree = [0, 0, 0].map(() => [0, 0, 0]);
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            threeXthree[i][j] = getThreeXthree(3 * i, 3 * j, board);
        }
    }
    var can_ues = [0, 0, 0, 0, 0, 0, 0, 0, 0].map(() => [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] == ".")
                can_ues[i][j] = (threeXthree[Math.floor(i / 3)][Math.floor(j / 3)]).concat(getRowCol(i, j, board));
            else
                can_ues[i][j] = ".";
        }
    }
    var can_in = can_ues.map(function (res) {
        return res.map(function (r) {
            if (r == ".")
                return r;
            else {
                return ALL.filter(function (s) {
                    return r.indexOf(s) == -1;
                })
            }
        })
    });
    var jsonSet = new Array;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (can_in[i][j] != ".") {
                var json = {
                    can: can_in[i][j],
                    x: i,
                    y: j
                }
                jsonSet.push(json)
            }
        }
    }
    board = SetBoard(jsonSet, board);
    return board;
};

function SetBoard(jsonSet, board) {  
    jsonSet.sort((x, y) => {
        if (x.can.length > y.can.length) {
            return 1
        }
        if (x.can.length < y.can.length) {
            return -1
        }
        return 0
    })
    var x = jsonSet[0].x;
    var y = jsonSet[0].y;
    if (jsonSet[0].can.length == 0) {
        return false
    } else if (jsonSet[0].can.length == 1) {
        var value = jsonSet[0].can[0];
        board[x][y] = value;
        if (jsonSet.length == 1) {
            return board
        } else {
            jsonSet.shift();
            jsonSet.forEach(elem => {
                if (elem.x == x || elem.y == y || BinA(x, elem.x) && BinA(y, elem.y)) {
                    elem.can = elem.can.filter((r) => r != value);
                }
            });
            return SetBoard(jsonSet, board);
        }
    } else {
        var CopyJsonSet = cloneObj(jsonSet);
        var p = [jsonSet[0].can.shift()]
        CopyJsonSet[0].can = p
        var flag = SetBoard(CopyJsonSet, board)
        if (flag == false) {
            return SetBoard(jsonSet, board)
        } else {
            return flag
        }
    }
}

var cloneObj = function (obj) {  
    var newObj = {};  
    if (obj instanceof Array) {  
        newObj = [];  
    }  
    for (var key in obj) {  
        var val = obj[key];  
        newObj[key] = typeof val === 'object' ? cloneObj(val): val;  
    }  
    return newObj;  
};

function BinA(a, b) {
    return a - a % 3 <= b && b < a + 3 - a % 3
}

function getRowCol(x, y, board) {
    var p = [];
    for (var i = 0; i < 9; i++) {
        if (board[i][y] !== '.') {
            p.push(board[i][y]);
        }
    }
    for (var j = 0; j < 9; j++) {
        if (board[x][j] !== '.') {
            p.push(board[x][j]);
        }
    }
    return p;
}

function getThreeXthree(x, y, board) {
    var p = [];
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (board[x + i][y + j] !== '.') {
                p.push(board[x + i][y + j]);
            }
        }
    }
    return p;
}


var b = solveSudoku(Input2);
console.log(b);
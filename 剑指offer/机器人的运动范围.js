function movingCount(threshold, rows, cols)
{
    let block = []
    for(i=0;i<rows;i++){
        block.push(new Array(cols).fill(0))
    }
    let gridNum = 0

    function move(x,y){
        let sum = String(x).split('').reduce((x,y)=>{return x*1+y*1})*1 + String(y).split('').reduce((x,y)=>{return x*1+y*1})*1
        if(sum<=threshold){
            block[x][y] = 1 
            gridNum++
            //右
            if(y+1<cols && block[x][y+1]==0){
                move(x,y+1)
            }
            //下
            if(x+1<rows && block[x+1][y]==0){
                move(x+1,y)
            }
            //上
            if(y-1>=0 && block[x][y-1]==0){
                move(x,y-1)
            }
            //左
            if(x-1>=0 && block[x-1][y]==0){
                move(x-1,y)
            }
        }
    }
    move(0,0)
    return gridNum
}

movingCount(18, 4, 6)
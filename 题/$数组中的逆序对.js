//https://www.nowcoder.com/profile/5540651/codeBookDetail?submissionId=30139288

a = [4, 0,5,8,3,6,8,54,2,45,67]

function InversePairs(data) {
    copy = data.concat()
    let P = mergeSort(data, copy, 0, data.length - 1)
    return P % 1000000007
}

function mergeSort(data, copy, start, end) { //data与copy交替使用
    if (start >= end) {
        return 0
    }
    let mid = (start + end) >> 1
    let left = mergeSort(copy, data, start, mid);//data与copy交替使用
    let right = mergeSort(copy, data, mid + 1, end);//data与copy交替使用
    let count = 0,
        p = mid,    //前半段下标
        q = end,    //后半段下标
        copyIndex = end;    //辅助数组下标
    while (p>=start && q>=mid+1){
        if(data[q]>=data[p]){
            copy[copyIndex--] = data[q--]
        }else{
            copy[copyIndex--] = data[p--]
            count += q-mid
        }
    }
    while(p>=start){
        copy[copyIndex--] = data[p--]
    }
    while(q>=mid+1){
        copy[copyIndex--] = data[q--]
    }

    return left+right+count
}

var p = InversePairs(a)
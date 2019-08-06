//排序
function swap(array, left, right) {
    let rightValue = array[right]
    array[right] = array[left]
    array[left] = rightValue
}


arr1 = [63345, 345, 31, 231, 51, 314]
mergeSort(arr1)

console.log(arr1)


//冒泡
function bubble(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // 从 0 到 `length - 1` 遍历
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) swap(array, j, j + 1)
        }
    }
    // return array;
}

//插入
function insertion(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i - 1; j >= 0 && array[j] > array[j + 1]; j--)
            swap(array, j, j + 1);
    }
}

//选择
function selection(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i
        for (let j = i + 1; j < array.length; j++) {
            min = array[j] < array[min] ? j : min
        }
        swap(array, i, min);
    }
}

//归并
function mergeSort(array) {
    return function mergeSort(array, left, right) {
        // 左右索引相同说明已经只有一个数
        if (left === right) return;
        // 等同于 `left + (right - left) / 2`
        // 相比 `(left + right) / 2` 来说更加安全，不会溢出
        // 使用位运算是因为位运算比四则运算快
        let mid = parseInt(left + ((right - left) >> 1));
        mergeSort(array, left, mid);  //左边
        mergeSort(array, mid + 1, right);   //右边

        let help = [];
        let i = 0;
        let p1 = left;
        let p2 = mid + 1;
        while (p1 <= mid && p2 <= right) {
            help[i++] = array[p1] < array[p2] ? array[p1++] : array[p2++];
        }
        while (p1 <= mid) {
            help[i++] = array[p1++];
        }
        while (p2 <= right) {
            help[i++] = array[p2++];
        }
        for (let i = 0; i < help.length; i++) {
            array[left + i] = help[i];
        }
        //return array;
    }(array, 0, array.length - 1)
}



//快排，还没看懂啊
function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number'? 0 : left,
        right = typeof right != 'number'? len -1 : right;
    if(left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
}
// 分区操作
function partition(arr, left, right) { 
    // 设定基准值pivot
    var pivot = left,
        index = pivot+1;
    for(var i = index;i<= right;i++){
        if(arr[i] < arr[pivot]){
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index-1);
    return index-1;
}
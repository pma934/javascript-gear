function reOrderArray(array)
{
    // write code here
    var array1 = array.filter(x=>x%2===1)
    var array2 = array.filter(x=>x%2===0)
    return array1.concat(array2)
}

var b = reOrderArray([1,2,3,4,5,6,7,8,9])

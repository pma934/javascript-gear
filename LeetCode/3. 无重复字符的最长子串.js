var lengthOfLongestSubstring = function(s) {
    var l = 0
    var r = 0
    var max = 0
    var len = s.length
    while(r++<len){
        max = Math.max(max,r-l)
        let ss = s.slice(l,r)
        let v = s[r]
        if(ss.indexOf(v)!==-1){ 
            l = l + ss.indexOf(v) + 1
        }
    }
    return max
};

c = lengthOfLongestSubstring("abc")

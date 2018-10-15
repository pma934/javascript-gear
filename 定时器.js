var timeleter = function (times) {
    console.log(`${times}`);
    if (times != 0) {
        var time = new Date;
        var kais = time.getTime();
        do {
            time = new Date;
        } while (time.getTime() - kais != 1000);
        timeleter(times - 1);
    }  
        

}
//timeleter(2);
//var a = [2,3,4];
//a.map(timeleter);

module.exports = timeleter;

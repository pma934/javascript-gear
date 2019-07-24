var num = 3; // 个数
var myTeam = [99,51,77];
var otherTeam = [91,92,49];


myTeam = myTeam.sort();
otherTeam = otherTeam.sort();

// 贪心
var mySlow = 0;
var myFast = num-1;
var otherSlow = 0;
var otherFast = num-1;
var score =0;
while (mySlow <= myFast)
{
    if (myTeam[mySlow] > otherTeam[otherSlow]){
        ++score;
        ++mySlow;
        ++otherSlow;
        continue;
    }
    if (myTeam[mySlow] < otherTeam[otherSlow]){
        --score;
        ++mySlow;
        --otherFast;
        continue;
    }
    if (myTeam[myFast] > otherTeam[otherFast]){
        ++score;
        --myFast;
        --otherFast;
        continue;
    }
    if (myTeam[myFast] < otherTeam[otherFast]){
        --score;
        ++mySlow;
        --otherFast;
        continue;
    }
    if (myTeam[myFast] == otherTeam[otherFast]){
        --score;
        ++mySlow;
        --otherFast;
        continue;
    }
}

console.log(score);

var str= 'We Are Happy'

function replaceSpace(str)
{
    //return ([...str].map(x => {return x = x==' '?'%20':x})).join('')
    return str.replace(/ /g,'%20')
}

console.log(replaceSpace(str))
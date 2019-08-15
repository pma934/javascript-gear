//可以生产各种各样的齿轮
class GearFactory {
    constructor(radius, thickness, material) {
        this.radius = radius
        this.thickness = thickness
        this.material = material
    }
}

//生产半径5cm、厚度2mm的铁齿轮的接口
function createGear(){
    return new GearFactory('5cm','Fe','2mm')
}

var a = createGear()
var b = createGear()
console.log(a,b,a==b)

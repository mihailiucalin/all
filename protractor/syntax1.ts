import {classDemo} from './syntax'
import {obiect} from './syntax'

let cd = new classDemo(123);
console.log("here")
console.log(obiect.ssn)

cd.setUsername('troll')

function validate(value:number):number
{
    return value + 1
}
let c = validate(2)
let obj=
{
    color:"red",
    engine:100
}
let obj_1=
{
    color:"red",
    objs:obj
}


interface vehicle
{
    color:string;
    engine:number;
    camera:boolean;
}

function validate_car(car:vehicle)
{
    console.log(car.camera)
    console.log(car.engine)
    console.log(car.color)
}


let Bmw=
{
    color:"red",
    engine:100,
    camera:true
}

validate_car(Bmw);


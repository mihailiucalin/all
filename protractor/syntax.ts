// const a = 4;
// let b:string= "hello";
// let c:number=4;

// let list1 = [1,3,4];
// let list2:Array<number>=[1,2,3,4]
// let dynamic:any;
// dynamic = 3;
// dynamic ='haha';


// for (let i=0; i<5; i++)
// {
//     setTimeout(function(){console.log(i);}, 100 * i)
// }

export class classDemo
{
    //properties
    username:string;
    password:string;
    ssn:number;
    
    constructor(ssn:number)
    {
        this.ssn=ssn;
    }

    getUsername()
    {
        return this.username;
    }
    
    setUsername(username:string)
    {
        this.username=username;
    }

    getSSN()
    {
        return this.ssn;
    }

}

export let obiect = new classDemo(143);
// console.log(c.getSSN())
// let d = new classDemo(1254);
// console.log(d.getSSN())



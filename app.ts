const person : { 
    name :string;
    age:number;
    hobies:string[];
    role:[number,string];
    }= {
    name:"blaha",
    age:21 ,
    hobies :["bodybuilding","foo"],
    role :[1,'admin']
}

person.role= [5,'lalal'];

console.log(person.role);

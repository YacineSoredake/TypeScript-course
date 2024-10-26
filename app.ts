function add(num1:number,num2:number,inter:string,flag:boolean){

    if (flag) {
        console.log(inter + num1+num2);
    }
    return num1+num2;
}

const Number1 = 5;
const Number2=5;
const flagg = true;
const phrase = 'reuslt is : ';


add(Number1,Number2,phrase,flagg);

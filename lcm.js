//  18   Program to Find LCM

let num1 =5
let num2 =3

let max = (num1>num2) ? num1 : num2

while(true){
    if(max%num1==0 && max%num2==0){
        console.log(`lcm of ${num1} and ${num2} is ${max}`);
        break
    }
    max++
}
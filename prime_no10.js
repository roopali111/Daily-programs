// 10   Program to Check Prime Number

let  num = 123;
let count = 0

for(let i =0;i<=num;i++)
if(num%i==0){
    count++

}
if(count==2){
    console.log(`${num} is prime`);
}
else{
    console.log(`${num} is not prime`);

}
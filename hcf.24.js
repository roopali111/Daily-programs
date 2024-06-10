// //   24  Program to Find HCF or GCD
let a =10
let b = 15
let hcf = 0
for(let i =1; i<=a && i<=b ; i++){
    if(a%i==0 && b%i==0){
        hcf = i
    }
}
console.log(`hcf ${a} and ${b} is ${hcf}`);
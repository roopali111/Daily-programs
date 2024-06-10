// 21   Program to Make a Simple Calculator (Take inpute from users)
let num1 = prompt('enter th value of num1')
let num2 = prompt('enter th value of num2')

const operator = prompt('Enter operator ( either +, -, * or / ): ');


let result;

if(operator == '+'){
    result = num1+num2
}

else if(operator == '-'){
    result = num1 - num2
}

else if(operator == '*'){
    result = num1*num2
}
else if(operator == '/'){
    result = num1/num2
}
else {
    result = num1%num2
}
console.log(`${num1} ${operator} ${num2} is ${result}`)
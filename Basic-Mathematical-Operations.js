// Basic Mathematical Operations;

function basicOp(operation, value1, value2){
    // if(operation == "+") return value1 + value2
    // if(operation == "-") return value1 - value2
    // if(operation == "*") return value1 * value2
    // if(operation == "/") return value1 / value2

   return eval(value1 + operation + value2)
}
console.log(basicOp("+", 10 , 20 ,10))


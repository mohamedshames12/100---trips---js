// repeat 

// create Empty string
// take the number argument and loop through it
// add the string to the empty one

function repeat(num, str) {
    let newStr = '';
   for(i = 0; i < num; i++) {
       newStr += str
   }
   return newStr
}
console.log(repeat(4, "hello\n"))


function repeat(num, str) {
   return str.repeat(num)
}
console.log(repeat(7, "hello\n"))



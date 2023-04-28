// To Square Root Or Not To Square Root

function squareOrSquareRoot(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if(Number.isInteger(Math.sqrt(array[i]))) {
            newArr.push(Math.sqrt(array[i]));
        }else {
            newArr.push(array[i] * array[i]);
        }
    }    

    return newArr
}

console.log(squareOrSquareRoot([4,3,9,7,2,1]))



function squareOrSquareRoot(array) {
    return array.map((num) => Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num * num);
}
console.log(squareOrSquareRoot([4,3,9,7,2,1]))



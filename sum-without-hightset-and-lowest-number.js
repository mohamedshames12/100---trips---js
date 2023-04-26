// sum without hightset and lowest number 

// check if empty value return 0
// find the highest number
// find the lowest number
//filter the array 
//sum all numbers in the array


function sumWithOutHightsetAndLowestNumber(array) {
    if(array == null) return 0;
    let maxValue = Math.max(...array);
    let minValue = Math.min(...array);
    
    const filterArray = array.filter((x) => x !== maxValue && x !== minValue);
    const newArray = filterArray.reduce((acc, courrect) => acc + courrect, 0)
    return newArray
}

console.log(sumWithOutHightsetAndLowestNumber([1,2,3,4,5,6,7,8,9,10]))

function sumWithOutHightsetAndLowestNumber(array) {
    if(array == null) return 0;
    return array.filter((x) => x !== Math.max(...array) && x !== Math.min(...array)).reduce((acc, current) => acc + current, 0);
}

console.log(sumWithOutHightsetAndLowestNumber([1,2,3,4,5,6,7,8,9,6,10]))



// here if your rebet your hight number still be increasing.. like 10 in array
function sumWithOutHightsetAndLowestNumber(array) {
    if(array == null) return 0;
    return array.sort((a,b) => a -b ).slice(1, -1).reduce((acc, current) => acc + current, 0)
}

console.log(sumWithOutHightsetAndLowestNumber([1,2,3,4,5,6,7,8,9,6,10,10,10]))
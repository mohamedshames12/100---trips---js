// Invert Values

function invert(array) {
    // const newArr = [];
    // for(i = 0; i < array.length; i++) {
    //     newArr.push(array[i] * -1);
    // }
    // return newArr;
    return array.map((num) => num * -1);
 }

 console.log(invert([1,2,3,4,5]))
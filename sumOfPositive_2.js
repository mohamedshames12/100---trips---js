// sum of positive

function sumOfPositive(arr) {
    let sum = 0;
    for(i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            sum += arr[i];
        }
    }
}
console.log(sumOfPositive([1,4,-3,9]))


function sumOfPositive(arr) {
    return arr.filter((x) => x > 0).reduce((acc, current) => acc + current, 0);
}
console.log(sumOfPositive([1,4,-3,9]))



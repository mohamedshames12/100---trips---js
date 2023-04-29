// Count By X 

function countBy(x, n) {
    let newArry = [];
    for(i = 1; i <= n; i++) {
        newArry.push(x * i);
    }
    return newArry;
  }

console.log(countBy(1,10))


function countBy(x, n) {
    return Array.from(Array(n + 1).keys()).slice(1).map((num => num * x))
  }

console.log(countBy(1,10))

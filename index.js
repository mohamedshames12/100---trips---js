
    function findAverage(array) {
        if(array === null || array.length === 0) return 0
         let sum = 0;
         for(let i = 0; i < array.length; i++) {
              sum += array[i];
         }
         const finallynum = sum / array.length;
         return finallynum;
      }


console.log(findAverage([1,2,3,4]))
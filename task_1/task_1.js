const arrNum = [1,23,1];

function findAverage(array) {
    
    const sum = array.reduce(  ( total, num) =>total + num , 0) / array.length;

    return sum;
    
}
const start = findAverage(arrNum);
console.log(start);
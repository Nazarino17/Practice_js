function SeriesSum(n)
{
    if  ( n == 0 ){
        return '0.00';
    } 
    let stepPlus = 0;

    for ( let i = 0; i < n; i++) {
        stepPlus += 1 / (3 * i +1);
    }
    return stepPlus.toFixed(2);

}   

const start = SeriesSum(0);
console.log(start);
//Количество делителей натур числа n

function getDivisorsCnt(n){
    let k = 0;
    for ( let i = 1;  i <= n; i++) {
        if ( n % i == 0 ){
            k++;
        }
    }
    return k;
}

const start = getDivisorsCnt(17);
console.log(start);
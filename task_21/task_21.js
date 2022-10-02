let str = 'Naz';
str = str.toLowerCase().split('');


function getCount(str) {
    let arrGol = ['a','e','i','o','u'];
    let count = 0;
    for ( let i = 0; i < str.length; i++){
        for ( let k = 0; k < arrGol.length; k++) {
            if ( str[i] === arrGol[k]) {
                count++;
            }
        }
    }
    return count;
}
const start = getCount(str);
console.log(start);
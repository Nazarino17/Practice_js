
var countSheep = function (num){
    let res = '';
    if (num == 0) {
        return '';
    } else {
        for ( let i = 1; i <= num; i++) {
            res += `${i} sheep...`;
        }  
    }
    return res;
};

const start = countSheep(3);
console.log(start);



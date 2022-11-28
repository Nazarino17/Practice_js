let isSquare = function(n){
    let sq = Math.sqrt(n);
    if (Number.isInteger(sq)) {
        return true;
    } else {
        return false;
    }
}

console.log(isSquare(23));
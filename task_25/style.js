function squareDigits(num){
    let arr = num.toString().split('');
    let arrPow = arr.map(el => el * el);
    let arrString = arrPow.join('');
    return parseInt(arrString);
}
console.log(squareDigits(4343));


function bigToSmall(arr){
    let arrN = [].concat(...arr);
    let res = arrN.sort( (a,b) => b - a ).join('>');
    return res;    
}

console.log(bigToSmall([[1,2],[3,4],[5,6]]));
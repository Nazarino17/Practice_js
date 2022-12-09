// порядок reduce() - слева направо
// Первый - классический пример, мы можем использовать метод reduce(), чтобы получить сумму массива чисел

// var arr=[1,2,3,4,5];
// console.log(arr.reduce((prev,curr)=>prev+curr)); //output: 15
// console.log(arr.reduce((a,b)=>a+b));  



function tailAndHead(arr){
    
    return arr.map( n => n % 10)
    .slice( 0, -1)
    .map(( x, i) => x + ( arr.map( n => + n
        .toString()[0])
        .slice(1))[i])
            .reduce(( a, b) => a * b);


}

console.log(tailAndHead([123,456,789,12,34,56,78]));
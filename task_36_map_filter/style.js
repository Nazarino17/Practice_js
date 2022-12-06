// // метод map() создает новый массив из результатами вызова функции для каждного елемента этого массива

// let a = [2,4,6,8];
// let b = a.map((_,i,arr) => arr[arr.length - 1 - i]); // переданные параметры _ = сам елемент , пропущеный , i = индекс , arr = сам массив

// console.log(a); //output: [ 2, 4, 6, 8 ]
// console.log(b); //output: [ 8, 6, 4, 2 ]




function isolateIt(arr) {
    let arrN = arr.map((item) => {
        if (item.length % 2 === 0) {
            return item.slice(0, item.length / 2) + "|" + item.slice(item.length / 2);
        } else if (item.length % 2) {
            return item.slice(0, item.length / 2) + "|" + item.slice(item.length / 2 + 1);

        }
    });
    return arrN;
}



// let a = ["", "a", "ab", "aba", "abab", "ababa"];
// let b = a.filter(x => {
//     if (x.length < 2) return true;
//     let y = x.split("").reverse().join("");
//     return x == y;
// });
// console.log(b);



function count(arr, n) {
    return arr.filter( x => x == n ).length;
}
let a = [1, 1, 1, 2, 2, 3, 4, 4];
console.log(count(a, 1)); //output: 3
console.log(count(a, 2));



function countGrade(scores){
    let obj = { // создаем обьект куда будет записывать результат
        S: 0 , A: 0, B: 0, C: 0, D: 0, X:0
    };
    scores.filter( x => { // отфильтровуем елементы , и плюсуем их в обьект
        if ( x == 100) { obj.S++; }
        if ( x < 100 && x >=90 ) { obj.A++; }
        if ( x < 90 && x >= 80) { obj.B++; }
        if ( x < 80 && x >= 60) { obj.C++; }
        if ( x < 60 && x >= 0) { obj.D++; }
        if ( x == -1) { obj.X++; }
    });
    return obj; 
}

console.log(countGrade([50,60,70,80,90,100, -1,-1]));

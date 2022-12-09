// Метод every() проверяет, все ли элементы в массиве проходят проверку, реализованную предоставленной функцией
// Метод some() проверяет, проходит ли определенный элемент в массиве проверку, реализованную предоставленной функцией.


// let a = [1,2,3,4,5];
// a.every( x => {
//   console.log(x); 
//   return x < 4;
// });


// let a = 0, b = 0, arr = [3,6,9,6,9,3];
// arr.some(( x, i ) => { 
//   a = arr[i];  //or a=x
//   b = arr[i + 1]; // следующий елемент
//   return a + b == 15;
// });
// console.log(a,b);


function mirrorImage(arr){
    let a = 0;
    let b = 0;
    let arrN = arr.some( ( x, i ) => {
        a = arr[i];
        b = arr[i + 1]; 
        

        return a === parseInt(String(arr[i+1]).split("").reverse().join(""));
    });

    return arrN ? [a, b] : [-1, -1];

}

console.log(mirrorImage([11,22,33,33,22,11]));

  
// let a = ["", "a", "ab", "aba", "abab", "ababa"];
// let b = a.filter(x => {
//     if (x.length < 2) return true;
//     let y = x.split("").reverse().join("");
//     return x == y;
// });
// console.log(b);
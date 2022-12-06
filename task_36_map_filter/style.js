// // метод map() создает новый массив из результатами вызова функции для каждного елемента этого массива

// let a = [2,4,6,8];
// let b = a.map((_,i,arr) => arr[arr.length - 1 - i]); // переданные параметры _ = сам елемент , пропущеный , i = индекс , arr = сам массив

// console.log(a); //output: [ 2, 4, 6, 8 ]
// console.log(b); //output: [ 8, 6, 4, 2 ]




function isolateIt(arr) {
    let arrN = arr.map((item) => {
        if (item.length % 2 === 0) {
            return item.slice(0 ,item.length/2) + "|" + item.slice(item.length / 2);
        } else {
            return item.slice(0, item.length/2) + "|" + item.slice(item.length / 2 + 1);

        }
    });
    return arrN;
}

console.log(isolateIt(["abcd", "efgh"]));
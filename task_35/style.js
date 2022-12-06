function threeInOne(arr){
    let arrNew = arr.slice();// делаем копию массива

    let res = [];// создаем пустой массив для результата

    for ( let i = 0; i < arrNew.length; i++) { 

        let tru = arrNew.splice(0,3);// вырезаем елементы по индексу 
        let truSum = tru[0] + tru[1] + tru[2]; // додаем их 
        res.push(truSum); // и добавляем результат в новій массив

    }
    return res;
}


console.log(threeInOne([1,2,3,4,5,6]));
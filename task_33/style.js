function shuffleIt(arr, ...arr2){// оператор спред
    for ( let index of arr2) { // перебор for of
        [arr[index[0]], arr[index[1]]] = [arr[index[1]], arr[index[0]]]; //деструктуризация

    }
    return arr;

}

console.log(shuffleIt([1,2,3,4,5],[1,2], [4,1]));
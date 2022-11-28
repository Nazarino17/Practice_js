// A, E, I, O, U, Y.

function disemvowel(str) {
    let arrG = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let res = [];//пустой массив

    for ( let i = 0; i < str.length; i++ ) { //перебераем массив 
        if (!arrG.includes(str[i])) { // проверяем условие
            res.push(str[i]);// если выполняеться условие то мы в массив добавляем елементы
        }
    }
    return res.join('');// превращаем массив в строку
}

console.log(disemvowel('Nazar Pilipenko'));
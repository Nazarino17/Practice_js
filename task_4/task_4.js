let abr = 'Nazar Pilipenko aaaAAA';

function abbrevName(name){

    let toUp = name.split(" ").filter( function( el ) {
        return el.trim() !== ''; // если елемент равен рустой строке то мы его возвращаем
    });
    
    return toUp.map(el => el[0].toUpperCase()).join("."); //мы возвращаем первую букву слова и делаем ее большой и переделываем массив в строку 

}   

const start = abbrevName(abr);
console.log(start);

// удаление пустой ячейки в массиве
let e = " womqdwom  fqkwfdmqop qpm pqof";
let eArr = e.split("");
for ( let i = 0; i < eArr.length; i++) {
    if ( eArr[i].trim() !== ''){
    } else {
        delete eArr[i];
    }
}

console.log(eArr);
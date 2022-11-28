// Он должен начинаться с хэштега (#).
// Все слова должны иметь первую букву с заглавной буквы.
// Если конечный результат длиннее 140 символов, он должен возвращать false.
// Если входные данные или результат - пустая строка, то возвращается false.


function hustag(str) {

    if (str.trim() === '') return false;// проверяем условие

    let strW = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

    let strWH = `#${strW.trim()}`;

    return strWH.length > 140 ? false : strWH;
}   

console.log(hustag('qsasassdsdgd aqsasassdsdgd'));
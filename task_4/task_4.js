let abr = 'Nazar Pilipenko aaaa';

function abbrevName(name){
    // let abrNew = name.split("").filter( function (letters) {

    //     return  letters === letters.toUpperCase();
    // });

    // let filetrStr = abrNew.filter( function (item) {

    //     return item.trim() !== '';
    // });

    return filetrStr.join(".");
}   
const start = abbrevName(abr);
console.log(start);
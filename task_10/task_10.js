let userName = "Nazar Pilipenko";


function billboard(name, price = 30){
    let user = name.length;
    let arr = 0;
    for ( let i = 0; i < user; i++) {
        arr = arr + price; // то есть каждной итерацией будет к нулю добавляться 30 , до того времени пока цикл не останвоиться
    }
    return arr;
} 

const start = billboard(userName);
console.log(start);
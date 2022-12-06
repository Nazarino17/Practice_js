function fiveLine(s){
    let str = '';
    let arr = [];

    s = s.trim();

    for ( let i = 0; i < 5; i++) {
        str += s;
        arr.push(`\n${str}`);
    }

    return arr.join('').trim();
}

console.log(fiveLine("   Naza"));
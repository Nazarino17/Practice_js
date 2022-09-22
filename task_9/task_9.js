const n = 81,
      x = 1,
      y = 4;

function isDivisible(n, x, y) { 

    
    if (n%x) {
        return false;
    } if (n%y) {
        return false;
    } else {
        return true;
    } 
    
}
const start = isDivisible(n,x,y);
console.log(start);
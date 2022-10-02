function isTriangle(a,b,c){
    if ( a > 0 && b > 0 && c > 0) {
        if ( a < b + c && b < a + c && c < a + b ) {
            return true;
        } else {
            return false;
        }  
    } else {
        return false;
    }
}
const start = isTriangle(1,2,2);
console.log(start);
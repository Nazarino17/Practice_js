function basicOp(operation, value1, value2)
{
    if ( operation == '-') {
        return value1 - value2;
    } else if ( operation == '+') {
        return value1 + value2;
    } else if ( operation == '*') {
        return value1 * value2;
    } else if ( operation == '/') {
        return value1 / value2;
    } 
}

const start = basicOp('*', 33, 2);
console.log(start);
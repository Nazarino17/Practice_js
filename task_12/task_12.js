let arr = 'gp6bb';
function removeChar(str){
   // return str.slice(1,-1); упрощенный вариант
   return str.split('').splice(1).reverse().splice(1).reverse().join('');
}

const start = removeChar(arr);
console.log(start);
   
   
   
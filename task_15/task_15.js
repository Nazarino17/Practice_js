const str = '1111 11 1';


function findShort(s){
  return s.split(' ').sort(function(a,b){
    return a.length - b.length;
  })[0].length;
}

const start = findShort(str);
console.log(start);
// function unscrambleEggs(word){
//     // Split word by 'egg'
//     // Return the joined array
    
//     return word.split('egg').join('');
//   }

//   console.log(unscrambleEggs('Beggegeggineggneggeregg'));


// function cutIt(arr){
//     let small = arr[0].length;

//     for ( let word of arr) {
//       if ( word.length < small) {
//         small = word.length;
//       }
//     }

//     return arr.map( el => el.slice(0, small));

// }
// console.log(cutIt(['nazascsacasc','pilip', 'w']));


// function firstToLast(str,l){
//   const firstIndex = str.indexOf(l);// индекс 5
//     if (firstIndex >= 0) {
//         return str.lastIndexOf(l) - firstIndex;
//     } else {
//         return -1;
//     }
// }

// console.log(firstToLast("badfvjeav","v"));


// function splitAndMerge(str, sp) {
//   let word = str.split(' ');
  
//   return word.map(el => el.split('').join(sp)).join(' ');

// }

// console.log(splitAndMerge("My name is John","-"));


const alienLanguage = (str) => str.split(' ').map( el => el.slice(0, -1).toUpperCase() + el.slice(-1).toLowerCase()).join('');

console.log(alienLanguage("My name is John"));
// function filter_list(arr) {
//     return arr.filter( item => typeof(item) !== 'string');
// }
// console.log(filter_list([12,2,'d','1']));

// function filter_list(l) {

//     let res = [];

//     for ( let i = 0; i < l.length; i++){
//         if ( typeof l[i] == 'number') {
//             res.push(l[i]);
//         }
//     }
//     return res;
// }

// console.log(filter_list([21,21,'efew','fwe'])); 



// function solution(nums){
//     if (nums !== null) return false;
//     nums = nums.sort(function(a,b){ return a - b;});
//     return nums;
// }

// console.log(solution([1, 10, 2, 3, 5]));

let min = function(list){
    let max = list[0];
    for ( let i = 0; i < list.length; i++) {
        if (list[i] < max) {
            max = list[i];
        }
    }   
    return max;
}
let max = function(list){
    let max = list[0];
    for ( let i = 0; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }   
    return max;
}

console.log(max([31,4,1,6,888]));
console.log(min([31,4,1,6,888]));

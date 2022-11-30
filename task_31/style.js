// function filter_list(arr) {
//     return arr.filter( item => typeof(item) !== 'string');
// }
// console.log(filter_list([12,2,'d','1']));

function filter_list(l) {

    let res = [];

    for ( let i = 0; i < l.length; i++){
        if ( typeof l[i] == 'number') {
            res.push(l[i]);
        }
    }
    return res;
}

console.log(filter_list([21,21,'efew','fwe'])); 
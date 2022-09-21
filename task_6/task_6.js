let arr = [1,2,2,3,3,4,5];


function distinct(a) {

    return a.filter(function (el,id) {
        return a.indexOf(el) === id;
    });
    
}
const start = distinct(arr);
console.log(start);
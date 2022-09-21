let arr = [1,6,5,33,5,6,7];
let N = 2;



function index(arr, n) {
    res = 0;
    for ( let i = 0; i < arr.length; i++) {
        let res;
        if ( i == n) {
            res = Math.pow(n, arr[n]);
        }
    }
        if (n >= arr.length) {
            res = -1;
            return res;
        }

}

const start = index(arr, N);
console.log(start);
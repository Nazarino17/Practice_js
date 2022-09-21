const nCols = 16,
      nRows = 11,
      col = 5,
      row = 3;
      
// // function seatsInTheater(nCols, nRows, col, row) {
// // return (nRows - row) * (nCols - col + 1);
// // }   упрощенный вариант


function seatsTeater (nCols, nRows, col, row) {
    let rowEx = nRows - row;
    let colEx = nCols - col + 1;
    let res = colEx * rowEx;

    return res;
}

const start = seatsTeater(nCols, nRows, col, row);
console.log(start);



function quadraticFormula(a, b, c) {
    let des = b * b - 4 * a * c;
    let x1 = (-b + Math.sqrt(des)) / (2 * a);
    let x2 = (-b - Math.sqrt(des)) / (2 * a);
    return [x1,x2];
  }

  const start = quadraticFormula(2, 16 , 1);
  console.log(start);
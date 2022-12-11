function rndCode(){
    let alf = 'ABCDEFGHIJKLM';
    let num = '0123456789';
    let char = '~!@#$%^&*';
    let psw = '';
    
      for (let i = 0; i < 2; i++) {
        psw += alf[~~(Math.random()*alf.length)];
      }
      for (let i = 0; i < 4; i++) {
        psw += num[~~(Math.random()*num.length)];
      }
      for (let i = 0; i < 2; i++) {
        psw += char[~~(Math.random()*char.length)];
      }
    
    return psw;
}

console.log(rndCode());
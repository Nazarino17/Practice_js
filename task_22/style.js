let p = document.querySelectorAll('#test');

for ( let i = 0; i < p.length; i++) {
    p[i].addEventListener('click', sqrt);
};

function sqrt() {
    let res;
    res = this.textContent * this.textContent;
    this.textContent = `${this.textContent} = ${res}`; 
    this.removeEventListener('click', sqrt);
}

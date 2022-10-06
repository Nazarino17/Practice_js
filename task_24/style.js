let div = document.querySelectorAll('div');

for ( let i = 0; i < div.length; i++) {
    div[i].addEventListener('click', red);
}



function red() {
    this.style.backgroundColor = 'red';
    this.removeEventListener('click', red);
    this.addEventListener('click', green);
}


function green() {
    this.style.backgroundColor = 'green';
    this.removeEventListener('click', green);
    this.addEventListener('click', red);
}
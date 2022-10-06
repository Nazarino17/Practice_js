
let input = document.querySelectorAll('input');

for ( let i = 0; i < input.length; i++) {
    input[i].addEventListener('blur', wrtLen);
}

function wrtLen() {
    let corrLen = this.dataset.length;
    let inputWrt = this.value.length;

    if (corrLen == inputWrt) {
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }

}

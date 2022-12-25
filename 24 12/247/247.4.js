let button1 = document.querySelector('#button1');
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let sum = document.querySelector('#sum')

button1.addEventListener('click', function() {
    let s = sum.textContent = Number(a.textContent) + Number(b.textContent) + Number(c.textContent);
    console.log('Равно: ' + s);
});
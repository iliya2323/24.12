
let button1 = document.querySelector('#button1');
let a = document.querySelector('#a')
let b = document.querySelector('#b')

button1.addEventListener('click', function() {
    let s = Number(a.textContent) + Number(b.textContent);
    console.log(s);
});
 
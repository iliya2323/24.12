let button1 = document.querySelector('#button1');
let a = document.querySelector('#a')


button1.addEventListener('click', function () {
    let s = a.textContent + '!';
    console.log(s);
});
 
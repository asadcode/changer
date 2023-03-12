var btn = document.querySelector('.btn');
var link = document.querySelector('.link');
var icon = document.querySelector('.icon');
var wrap = document.querySelector('.wrap');
var as = document.querySelector('.as')
var spantxt = document.querySelector('.spantxt');
var text = document.querySelector('#text');

btn.addEventListener('click', function(){
    btn.classList.toggle('dodger');
    link.classList.toggle('border');
    icon.classList.toggle('fa-twitter');
    // spantxt.textContent = "Twitter";
    spantxt.classList.toggle('blue')
    text.textContent = 'Twitter'
});
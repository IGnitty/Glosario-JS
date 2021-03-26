
window.addEventListener('scroll', ()=>{
    var main = document.querySelector('.main-page');
    main.classList.toggle('sticky', window.scrollY > 0);

})

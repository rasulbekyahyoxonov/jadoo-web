document.querySelector('.open-icon').addEventListener('click', () => {
    document.getElementById('title-ul').style.right = 0;
    document.getElementById('dark-div').style.visibility = 'visible';
})
document.querySelector('.close-icon').addEventListener('click', () => {
    document.getElementById('title-ul').style.right = '-370px';
    document.getElementById('dark-div').style.visibility = 'hidden';

})
document.querySelector('.dark-div').addEventListener('click', () => {
    document.getElementById('title-ul').style.right = '-370px';
    document.getElementById('dark-div').style.visibility = 'hidden';

})

ScrollReveal ({
  reset: false,
  distance: '100px',
  duration: 1000
});
ScrollReveal().reveal('.low',{delay: 0, origin: 'bottom'});
ScrollReveal().reveal('.med',{delay: 100, origin: 'bottom'});
ScrollReveal().reveal('.pro',{delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.max',{delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.left',{delay: 100, origin: 'left'});
ScrollReveal().reveal('.left2',{delay: 200, origin: 'left'});
ScrollReveal().reveal('.left3',{delay: 300, origin: 'left'});
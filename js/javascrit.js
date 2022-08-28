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


// ScrollReveal ({
//   reset: false,
//   distance: '100px',
//   duration: 1000
// });

// ScrollReveal().reveal('.reval1',{delay: 300, origin: 'right'});

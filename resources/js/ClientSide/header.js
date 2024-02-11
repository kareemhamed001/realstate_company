const fixed_header = document.querySelector('#header');
if (window.scrollY <= fixed_header.clientHeight) {
    fixed_header.classList.remove('fixed-header')
}
document.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    // Adjust the condition based on when you want the background to change
    if (scrollY > fixed_header.clientHeight-100) {
        fixed_header.classList.add('fixed-header','home-header');
        fixed_header.style.position = 'fixed !important';
    } else {
        fixed_header.classList.remove('fixed-header','home-header');
    }
});

let headerLinks = document.querySelectorAll('.header-link');

headerLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        let target = link.getAttribute('href');
        let targetElement = document.querySelector(target);
        let targetElementOffset = targetElement.offsetTop;
        window.scrollTo(0, targetElementOffset - fixed_header.clientHeight+20);

        e.target.parentElement.parentElement.querySelectorAll('.header-link').forEach(function (link) {
            link.classList.remove('active');

        })
        e.target.classList.add('active');
    })
})

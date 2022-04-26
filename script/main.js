const navItems = document.querySelector('#nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

openNavBtn.addEventListener('click', () =>
{
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
})

const closeNav = () =>
{
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav);

// close nav menu when a menu is clicked
if (window.innerWidth < 1024) {
    var menus = document.querySelectorAll('#nav__items li a');
    var menuItems = [...menus]
    menuItems.forEach(el => {
        el.addEventListener('click', () =>
        {
            closeNav()
        })
    });
}

// change color of the nav on scrolling down
window.addEventListener('scroll', () =>
{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// testimonials swiper initializing code
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    // responsive breakpoints, note that swiperjs is mobile first
    breakpoints: {
        // when window width is >= 600px
        600: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
})
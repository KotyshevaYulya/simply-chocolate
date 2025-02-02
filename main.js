//! menu  ------------------------------------------


const menu = document.querySelector(".mob-menu");
const menuOpenBtn = document.querySelector(".menu-open-btn");
const menuCloseBtn = document.querySelector(".close-menu-btn");

// console.dir(menu);

menuOpenBtn.addEventListener('click', () => {
    menu.classList.toggle("is-open");
})

menuCloseBtn.addEventListener('click', () => {
    menu.classList.toggle("is-open");
})

// ! scroll link ------------------------------------------

const scrollLink = document.querySelector(".hero-scroll-link");

scrollLink.addEventListener('click', (event) => {
    event.preventDefault(); // Запобігаємо стандартній поведінці посилання
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

// ! modal ------------------------------------------

const reviewBtn = document.querySelector(".loved-btn");
const reviewModal = document.querySelector(".backdrop");
const reviewModalClose = document.querySelector(".icon-close-modal");


reviewBtn.addEventListener('click', () => {
    reviewModal.classList.toggle("is-open");
})

reviewModalClose.addEventListener('click', () => {
    reviewModal.classList.toggle("is-open");
})



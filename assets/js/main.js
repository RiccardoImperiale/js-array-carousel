const slidesElement = document.querySelector('.slides')
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')

const slides = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp'
];

let activeImage = 0;

for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    const imageMarkup = `<img class="${i === activeImage && 'active'}" src="./assets/img/${slide}" alt="superhero image">`
    slidesElement.insertAdjacentHTML('beforeend', imageMarkup)
}

nextBtn.addEventListener('click', () => {
    activeImage++
    activeImage > (slides.length - 1) && (activeImage = 0)
    toggleActiveClass()
})

prevBtn.addEventListener('click', () => {
    activeImage--
    activeImage < 0 && (activeImage = slides.length - 1)
    toggleActiveClass()
})

function toggleActiveClass() {
    const currentImage = document.querySelector('.active')
    currentImage.classList.remove('active')
    const allImages = document.querySelectorAll('.slides img')
    allImages[activeImage].classList.add('active')
}
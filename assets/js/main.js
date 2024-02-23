const slidesElement = document.querySelector('.slides')
const thumbsElement = document.querySelector('.thumbnails')
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
    const thumbMarkup = `
    <div class="thumbnail">
    <img class="${i === activeImage && 'activeImg'}" src="./assets/img/${slide}" alt="thumbnail image">
    </div>`;

    slidesElement.insertAdjacentHTML('beforeend', imageMarkup)
    thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)

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
    const currentThumb = document.querySelector('.activeImg')
    currentImage.classList.remove('active')
    currentThumb.classList.remove('activeImg')
    const allImages = document.querySelectorAll('.slides img')
    const allThumbs = document.querySelectorAll('.thumbnail img')
    allImages[activeImage].classList.add('active')
    allThumbs[activeImage].classList.add('activeImg')
}
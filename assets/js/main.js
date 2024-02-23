const slidesElement = document.querySelector('.slides')

// get the images as an array
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

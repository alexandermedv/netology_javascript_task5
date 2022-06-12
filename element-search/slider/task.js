const slides = Array.from(document.querySelectorAll('.slider__item'))

const prev = document.querySelector('.slider__arrow_prev')
prev.onclick = () => {

    const current = slides.findIndex((element) => {return element.className.includes('slider__item_active')})
    prevNumber = (current===0) ? prevNumber = slides.length-1 : current-1;

    slides[current].className = slides[current].className.replace(" slider__item_active", "")
    slides[prevNumber].className += ' slider__item_active';
}

const next = document.querySelector('.slider__arrow_next')
next.onclick = () => {

    const current = slides.findIndex((element) => {return element.className.includes('slider__item_active')})
    nextNumber = (current===slides.length-1) ? nextNumber = 0 : nextNumber = current+1;

    slides[current].className = slides[current].className.replace(" slider__item_active", "")
    slides[nextNumber].className += ' slider__item_active';
}
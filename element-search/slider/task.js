slides = Array.from(document.querySelectorAll('.slider__item'))

prev = document.querySelector('.slider__arrow_prev')
prev.onclick = () => {

    current = slides.findIndex((element) => {return element.className.includes('slider__item_active')})
    prev_number = (current===0) ? prev_number = slides.length-1 : current-1;

    slides[current].className = slides[current].className.replace(" slider__item_active", "")
    slides[prev_number].className += ' slider__item_active';
}

next = document.querySelector('.slider__arrow_next')
next.onclick = () => {

    current = slides.findIndex((element) => {return element.className.includes('slider__item_active')})
    next_number = (current===slides.length-1) ? next_number = 0 : next_number = current+1;

    slides[current].className = slides[current].className.replace(" slider__item_active", "")
    slides[next_number].className += ' slider__item_active';
}
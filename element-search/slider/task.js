slides = Array.from(document.querySelectorAll('.slider__item'))
current = 0;

prev = document.querySelector('.slider__arrow_prev')
prev.onclick = () => {
    if (current===0) {
        prev_number = slides.length-1;
    } else {
        prev_number = current-1;
    }

    slides[current].className -= ' slider__item_active';
    slides[current].style.display = 'none';
    slides[prev_number].className += ' slider__item_active';
    slides[prev_number].style.display = 'block';
    
    current = prev_number;
}

next = document.querySelector('.slider__arrow_next')
next.onclick = () => {
    if (current===slides.length-1) {
        next_number = 0;
    } else {
        next_number = current+1;
    }

    slides[current].className -= ' slider__item_active';
    slides[current].style.display = 'none';
    slides[next_number].className += ' slider__item_active';
    slides[next_number].style.display = 'block';

    current = next_number;
}
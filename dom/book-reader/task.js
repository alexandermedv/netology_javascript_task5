
function onClick() {
    event.preventDefault();
    parent = this.closest('.book__control')
    buttonList = parent.querySelectorAll('.font-size')
    for (let i=0; i<buttons.length; i++) {
        buttonList[i].className = buttonList[i].className.replace(' font-size_active', '');
    }
    this.className += ' font-size_active';

    book = this.closest('.book');
    book.className = book.className.replace(' book_fs-small', '');
    book.className = book.className.replace(' book_fs-big', '');
    if (this.className.includes('font-size_small')) {
        book.className += ' book_fs-small'
    }
    if (this.className.includes('font-size_big')) {
        book.className += ' book_fs-big'
    }
}

const buttons=Array.from(document.querySelectorAll('.font-size'))
let i = 0;

for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', onClick);
}
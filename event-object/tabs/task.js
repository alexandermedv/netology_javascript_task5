const tabs = Array.from(document.querySelectorAll('.tab'))

function onClick() {
    let selected = tabs.indexOf(document.querySelector('.tab_active'))
    let contents = Array.from(document.querySelectorAll('.tab__content'))

    if (this.className.includes('tab_active')) {
        return false
    } else {
        tabs[selected].className = tabs[selected].className.replace(' tab_active', '');
        contents[selected].className = contents[selected].className.replace(' tab__content_active', '');
        this.className += ' tab_active'
        selected = tabs.indexOf(document.querySelector('.tab_active'))
        contents[selected].className += ' tab__content_active'
        return false
    }
}

for (let i=0; i<tabs.length; i++) {
    tabs[i].addEventListener('click', onClick);
}
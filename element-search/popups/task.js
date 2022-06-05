const modalMain = document.getElementById('modal_main')
modalMain.className += " modal_active";

collection = document.querySelectorAll('.modal__close')
const closeTimes = collection[0]

const modalSuccess = document.getElementById('modal_success')
const success = document.querySelector('.show-success')
success.onclick = () => {
    modalSuccess.className += " modal_active";
    modalMain.className = modalMain.className.replace(" modal_active", "");
}

collection = document.querySelectorAll('.modal__close')
const close_times2 = collection[2]

const done = document.querySelector('.btn_success')
done.onclick = () => {
    modalSuccess.className = modalSuccess.className.replace(" modal_active", "");
}

const crosses = Array.from(document.querySelectorAll('.modal__close_times'));
for (let i=0; i<crosses.length; i++) {
    crosses[i].onclick = () => {
        const wind = crosses[i].closest('.modal')
        wind.className = wind.className.replace(" modal_active", "");
        wind.style.display = 'none';
    }
}
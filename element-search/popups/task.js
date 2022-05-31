modalMain = document.getElementById('modal_main')
modalMain.className += " modal_active";

collection = document.querySelectorAll('.modal__close')
closeTimes = collection[0]
// close_times.onclick = () => {
//     modalMain.className -= " modal_active";
//     modalMain.style.display = 'none';
// }

modalSuccess = document.getElementById('modal_success')
success = document.querySelector('.show-success')
success.onclick = () => {
    modalSuccess.className += " modal_active";
    modalMain.className -= " modal_active";
    modalMain.style.display = 'none';
}

collection = document.querySelectorAll('.modal__close')
close_times2 = collection[2]
// close_times2.onclick = () => {
//     modalSuccess.className -= " modal_active";
//     modalSuccess.style.display = 'none';
// }

done = document.querySelector('.btn_success')
done.onclick = () => {
    modalSuccess.className -= " modal_active";
    modalSuccess.style.display = 'none';
}

crosses = Array.from(document.querySelectorAll('.modal__close_times'));
for (let i=0; i<crosses.length; i++) {
    crosses[i].onclick = () => {
        wind = crosses[i].closest('.modal')
        wind.className -= " modal_active";
        wind.style.display = 'none';
    }
}
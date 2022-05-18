modal_main = document.getElementById('modal_main')
modal_main.className += " modal_active";
console.log(modal_main.className)

collection = document.querySelectorAll('.modal__close')
close_times = collection[0]
console.log(close_times)
close_times.onclick = () => {
    modal_main.className -= " modal_active";
    modal_main.style.display = 'none';
}

modal_success = document.getElementById('modal_success')
success = document.querySelector('.show-success')
success.onclick = () => {
    modal_success.className += " modal_active";
    modal_main.className -= " modal_active";
    modal_main.style.display = 'none';
}

collection = document.querySelectorAll('.modal__close')
console.log(collection)
console.log(collection[2]) 

close_times2 = collection[2]
console.log(close_times2)
close_times2.onclick = () => {
    modal_success.className -= " modal_active";
    modal_success.style.display = 'none';
}

done = document.querySelector('.btn_success')
done.onclick = () => {
    modal_success.className -= " modal_active";
    modal_success.style.display = 'none';
}
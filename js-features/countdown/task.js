
const t=document.getElementById('timer');
let timerId = setInterval(() => {
    if (Number(t.textContent) > 0) {
        t.textContent = Number(t.textContent) - 1
    } else {
        alert('Вы победили в конкурсе!')
        clearInterval(timerId)
        t.textContent = Number(60)
    }
}, 1000)

console.log(t.textContent)
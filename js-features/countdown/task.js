
const t=document.getElementById('timer');
setInterval(() => {
    if (Number(t.textContent) > 0) {
        t.textContent = Number(t.textContent) - 1
    } else {
        alert('Вы победили в конкурсе!')
        clearInterval()
    }
}, 1000)

console.log(t.textContent)
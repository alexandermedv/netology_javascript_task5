const d = document.getElementById('dead');
const l = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`)
for (i=1; i<=9; i++){
    const hole = getHole(i);

    hole.onclick = () => {
        console.log(hole.className)
        if (hole.className === 'hole hole_has-mole') {
            console.log('+1 попадание')
            d.textContent = Number(d.textContent) + 1
        } else {
            console.log('-1 попадание')
            l.textContent = Number(l.textContent) + 1
        }
        console.log('Убито кротов', d.textContent)
        console.log('Промахов', l.textContent)
        if (d.textContent >= 10){
            alert('Вы победили!');
            d.textContent = 0;
            l.textContent = 0;
        }
        if (l.textContent >= 5){
            alert('Вы проиграли!');
            d.textContent = 0;
            l.textContent = 0;
        }
    }
}



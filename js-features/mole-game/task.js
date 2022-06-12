const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`)
for (i=1; i<=9; i++){
    const hole = getHole(i);



    hole.onclick = () => {
        if (hole.className === 'hole hole_has-mole') {
            dead.textContent = Number(dead.textContent) + 1
        } else {
            lost.textContent = Number(lost.textContent) + 1
        }
        
        clear = (dead, lost) => {
            dead.textContent = 0;
            lost.textContent = 0;
        }

        if (dead.textContent >= 10){
            alert('Вы победили!');
            clear(dead, lost);
        }
        if (lost.textContent >= 5){
            alert('Вы проиграли!');
            clear(dead, lost);
        }
    }
}



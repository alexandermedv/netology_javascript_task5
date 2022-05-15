const image=document.getElementById("cookie");
const clickCounter=document.getElementById("clicker__counter");
console.log(Number(clickCounter.textContent));
image.onclick = () => {
    if (Number(clickCounter.textContent) % 2 === 0) {
        image.width += 20;
        image.height += 20;
        cl.textContent = Number(clickCounter.textContent) + Number(1);
    } else {
        image.width -= 20;
        image.height -= 20;
        cl.textContent = Number(clickCounter.textContent) + Number(1);
    }
}

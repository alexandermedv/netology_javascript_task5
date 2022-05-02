const img=document.getElementById("cookie");
const cl=document.getElementById("clicker__counter");
console.log(Number(cl.textContent));
img.onclick = () => {
    if (Number(cl.textContent) % 2 === 0) {
        img.width += 20;
        img.height += 20;
        cl.textContent = Number(cl.textContent) + Number(1);
    } else {
        img.width -= 20;
        img.height -= 20;
        cl.textContent = Number(cl.textContent) + Number(1);
    }
}

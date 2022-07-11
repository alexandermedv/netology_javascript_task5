
function show(element){ 
    setInterval(() => {
    const {top, bottom} = element.getBoundingClientRect();
    if ((bottom>0) && (top < window.innerHeight) && !(element.className.includes('reveal_active'))) {
        element.className += ' reveal_active'
    }
    if ((bottom<0 || top > window.innerHeight) && (element.className.includes('reveal_active'))) {
        element.className = element.className.replace(' reveal_active', '')
    }
}, 1000)
}


const divArray=Array.from(document.querySelectorAll('.reveal'))

for (let i=0; i< divArray.length; i++) {
    show(divArray[i])
}
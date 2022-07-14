
function show(element){ 
    parent = element.closest('.rotator')
    active = parent.querySelector('.rotator__case_active')
    active.className = active.className.replace(' rotator__case_active', '')
    element.className += ' rotator__case_active'
}

const rotator=Array.from(document.querySelectorAll('.rotator__case'))
let i = 0;

setInterval(() => {
    show(rotator[i])
    i++;
    i = i % rotator.length;
}, 1000)
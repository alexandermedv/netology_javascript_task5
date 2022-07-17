window.addEventListener('scroll', function() {
    const divArray=Array.from(document.querySelectorAll('.reveal'))
    
    for (let i=0; i< divArray.length; i++) {
        const {top, bottom} = divArray[i].getBoundingClientRect();
        
        if ((bottom>0) && (top < window.innerHeight) && !(divArray[i].className.includes('reveal_active'))) {
            divArray[i].className += ' reveal_active'
        }
        if ((bottom<0 || top > window.innerHeight) && (divArray[i].className.includes('reveal_active'))) {
            divArray[i].className = divArray[i].className.replace(' reveal_active', '')
        }
    }
  });
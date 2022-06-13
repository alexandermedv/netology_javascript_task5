
const subMenuList = Array.from(document.querySelectorAll('.menu_sub'))

const link = [];

for (let i=0; i<subMenuList.length; i++) {
    link[i] = subMenuList[i].closest('.menu__item').querySelector('.menu__link');
}

const open = [];
for (let i=0; i<link.length; i++) {
    link[i].onclick = () => {

                    open[i] = document.querySelector(".menu_active")
        
                    if (open[i]) {
                        open[i].className = open[i].className.replace(" menu_active", "")
        
                        if (subMenuList[i].closest('.menu__item').querySelector('.menu__link').textContent !== open[i].closest('.menu__item').querySelector('.menu__link').textContent) {
                        subMenuList[i].className += " menu_active";
                        }
                    } else {
                        subMenuList[i].className += " menu_active";
                    }
        
                    return false
                }
}
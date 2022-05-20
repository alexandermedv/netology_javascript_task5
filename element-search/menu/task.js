
menu = Array.from(document.querySelectorAll('.menu__item'))
getItem = index => menu[index]

for (i=0; i< menu.length; i++) {
    const item = getItem(i);
    
    if (item.querySelector('.menu_sub')) {
        menu_link = item.querySelector('.menu__link')
        menu_sub = item.querySelector('.menu_sub')
        menu_link.onclick = () => {
            if (menu_sub.className.includes(" menu_active")) {
                menu_sub.className -= " menu_active";
            } else {
               menu_sub.className += " menu_active"; 
            }
        }
    } else {
        submenu_points = item.querySelectorAll('.menu__link')
        for (j=0; j<submenu_points.length; j++) {
            submenu_points[j].onclick = () => {
                return false
            }
        }
    }
}


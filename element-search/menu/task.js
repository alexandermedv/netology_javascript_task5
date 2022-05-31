
subMenuList = Array.from(document.querySelectorAll('.menu_sub'))
console.log('subMenuList =', subMenuList)

// for (i=0; i< subMenuList.length; i++) {
//     console.log('i =', i)
//     const link = subMenuList[i].closest('.menu__item').querySelector('.menu__link')
//     console.log('link =', link)

//     console.log('i =', i)

    
//     submenu = subMenuList[i]
    
//     link.onclick = () => {
//         console.log('i =', i)

//         let open = document.querySelector(".menu_active")

//         if (open) {
//             open.className = open.className.replace(" menu_active", "")

//             if (submenu.closest('.menu__item').querySelector('.menu__link').textContent !== open.closest('.menu__item').querySelector('.menu__link').textContent) {
//                 submenu.className += " menu_active";
//             }
//         } else {
//             console.log('i =', i)
//             console.log('subMenuList[i] =', submenu)
//             submenu.className += " menu_active";
//         }

//         return false
//     }
// }

link1 = subMenuList[0].closest('.menu__item').querySelector('.menu__link')
link2 = subMenuList[1].closest('.menu__item').querySelector('.menu__link')

link1.onclick = () => {

            let open = document.querySelector(".menu_active")

            if (open) {
                open.className = open.className.replace(" menu_active", "")

                if (subMenuList[0].closest('.menu__item').querySelector('.menu__link').textContent !== open.closest('.menu__item').querySelector('.menu__link').textContent) {
                subMenuList[0].className += " menu_active";
                }
            } else {
                subMenuList[0].className += " menu_active";
            }

            return false
        }
    
link2.onclick = () => {

    let open = document.querySelector(".menu_active")

    if (open) {
        open.className = open.className.replace(" menu_active", "")

        if (subMenuList[1].closest('.menu__item').querySelector('.menu__link').textContent !== open.closest('.menu__item').querySelector('.menu__link').textContent) {
        subMenuList[1].className += " menu_active";
        }
    } else {
        subMenuList[1].className += " menu_active";
    }

    return false
}
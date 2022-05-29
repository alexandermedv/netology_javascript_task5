
sub_menu_list = Array.from(document.querySelectorAll('.menu_sub'))
console.log('sub_menu_list =', sub_menu_list)

// for (i=0; i< sub_menu_list.length; i++) {
//     console.log('i =', i)
//     const link = sub_menu_list[i].closest('.menu__item').querySelector('.menu__link')
//     console.log('link =', link)

//     console.log('i =', i)

    
//     submenu = sub_menu_list[i]
    
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
//             console.log('sub_menu_list[i] =', submenu)
//             submenu.className += " menu_active";
//         }

//         return false
//     }
// }

link1 = sub_menu_list[0].closest('.menu__item').querySelector('.menu__link')
link2 = sub_menu_list[1].closest('.menu__item').querySelector('.menu__link')

link1.onclick = () => {

            let open = document.querySelector(".menu_active")

            if (open) {
                open.className = open.className.replace(" menu_active", "")

                if (sub_menu_list[0].closest('.menu__item').querySelector('.menu__link').textContent !== open.closest('.menu__item').querySelector('.menu__link').textContent) {
                sub_menu_list[0].className += " menu_active";
                }
            } else {
                sub_menu_list[0].className += " menu_active";
            }

            return false
        }
    
link2.onclick = () => {

    let open = document.querySelector(".menu_active")

    if (open) {
        open.className = open.className.replace(" menu_active", "")

        if (sub_menu_list[1].closest('.menu__item').querySelector('.menu__link').textContent !== open.closest('.menu__item').querySelector('.menu__link').textContent) {
        sub_menu_list[1].className += " menu_active";
        }
    } else {
        sub_menu_list[1].className += " menu_active";
    }

    return false
}
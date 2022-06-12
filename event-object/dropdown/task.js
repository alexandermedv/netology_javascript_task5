
// function onClick() {
//     const dropdown = btn.closest(".dropdown")
//     const dropdownList = dropdown.querySelector(".dropdown__list")

//     if (dropdownList.className.includes(" dropdown__list_active")) {
//         dropdownList.className = dropdownList.className.replace(' dropdown__list_active', '')
//     } else {
//        dropdownList.className += " dropdown__list_active"; 
//     }

//     console.log('this', this);
//     if (this.querySelector(".dropdown__link")) {
//         console.log('this_link', this);
//     }
    
//     return false
// }

function onClick() {
    console.log('this', this);
    const dropdown = this.closest(".dropdown")
    const dropdownList = dropdown.querySelector(".dropdown__list")
    if (dropdownList.className.includes(" dropdown__list_active")) {
        dropdownList.className = dropdownList.className.replace(' dropdown__list_active', '')
        if (this.className.includes('dropdown__value')) {
            console.log('dropdown__value')
        } else {
            console.log('dropdown__link')
            dropdown.querySelector(".dropdown__value").textContent = this.textContent;
        }
    } else {
        dropdownList.className += " dropdown__list_active"; 
    }
    
    return false;
}

// function onClickValue() {
//     const dropdown = btn.closest(".dropdown")
//     const dropdownList = dropdown.querySelector(".dropdown__list")

//     // console.log('dropdown.querySelector(".dropdown__value").textContent', dropdown.querySelector(".dropdown__value").textContent)
//     // dropdown.querySelector(".dropdown__value").textContent = items[i].textContent;

//     if (dropdownList.className.includes(" dropdown__list_active")) {
//         dropdownList.className = dropdownList.className.replace(' dropdown__list_active', '')
//     }

//     console.log('this', this);
//     return false
// }

const btn = document.querySelector(".dropdown__value");
console.log('btn =', btn);
btn.addEventListener('click', onClick);

itemList = Array.from(btn.closest(".dropdown").querySelector(".dropdown__list").querySelectorAll(".dropdown__item"));

const items = [];
for (let i=0; i<itemList.length; i++) {
    items[i] = itemList[i].querySelector('.dropdown__link');
}

// for (let i=0; i<items.length; i++) {
//     value = items[i].textContent;
//     console.log('items[i] =', items[i])
//     console.log('value =', value);
//     items[i].addEventListener('click', onClick);
// }

itemList[1].addEventListener('click', onClick);
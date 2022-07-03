function onClick() {
    const dropdown = this.closest(".dropdown")
    const dropdownList = dropdown.querySelector(".dropdown__list"
    )
    if (dropdownList.className.includes(" dropdown__list_active")) {
        dropdownList.className = dropdownList.className.replace(' dropdown__list_active', '')
        if (this.className.includes('dropdown__value')) {
        } else {
            dropdown.querySelector(".dropdown__value").textContent = this.textContent;
        }
    } else {
        dropdownList.className += " dropdown__list_active"; 
    }
    event.preventDefault();
    
    return false;
}

const btn = document.querySelector(".dropdown__value");
btn.addEventListener('click', onClick);

const itemList = Array.from(btn.closest(".dropdown").querySelector(".dropdown__list").querySelectorAll(".dropdown__item"));

const items = [];
for (let i=0; i<itemList.length; i++) {
    items[i] = itemList[i].querySelector('.dropdown__link');
}

for (let i=0; i<items.length; i++) {
    value = items[i].textContent;
    items[i].addEventListener('click', onClick);
}
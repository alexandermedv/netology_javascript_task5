function changeDown() {
    children = this.querySelectorAll('.checkbox');

    // Проставляем галочки вниз
    if (this.closest('.interest')) {
        if (this.closest('.interest').querySelector('.interests_active')) {
            if (this.closest('.interest').querySelector('.interests_active').querySelectorAll('.interest__check')){
                children = this.closest('.interest').querySelector('.interests_active').querySelectorAll('.interest__check');
                for (let j=0; j<children.length; j++) {
                children[j].checked = this.checked;
                }
            }
        }
    }
}

const checkbox = document.querySelectorAll('.interest__check')

for (let i=0; i<checkbox.length; i++) {
    checkbox[i].addEventListener('change', changeDown)
}
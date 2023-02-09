const dropBtn = document.querySelector('.dropdown-btn')


dropBtn.addEventListener('click', () => {
    let openDropdown = document.querySelector('.dropdown-content')
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    } else {
        openDropdown.classList.add('show')
    }
})
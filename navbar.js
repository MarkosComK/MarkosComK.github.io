const navbar = () => {
    const hamburguer = document.querySelector('.hamburguer')
    const nav = document.querySelector('.nav-links')

    hamburguer.addEventListener('click', () =>{
        nav.classList.toggle('nav-active')
        hamburguer.classList.toggle('hamburguerx')
    })
    nav.addEventListener('click', () => {
        hamburguer.classList.toggle('hamburguerx')
        nav.classList.toggle('nav-active')
    })
    
}

navbar()
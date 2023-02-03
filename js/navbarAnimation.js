let icons = document.querySelectorAll('.navbar-icon')

icons.forEach((item, index) => {
    item.addEventListener('mouseover', (e) => focus(e.target, index))
    item.addEventListener('mouseleave', (e) => (
        icons.forEach((item) => {item.style.transform = "scale(1)  translateY(0px)"})
    ))
})


function focus(target, index){
    next = index + 1
    next1 = index + 2
    previous = index - 1
    previous1 = index - 2

    if(previous == -1){
        target.style.transform = "scale(1.3) translateY(-10px)"
    } 
    if(next == icons.length){
        icons[index].style.transform = "scale(1.3) translateY(-10px)"
    } else {
     
        // icons[previous1].style.transform = "scale(1.1)"
        icons[previous].style.transform = "scale(1.2) translateY(-6px)"
        icons[index].style.transform = "scale(1.5) translateY(-10px)"
        icons[next].style.transform = "scale(1.2) translateY(-6px)"
        // icons[next1].style.transform = "scale(1.1)"
    }
}


import { aboutContent, aboutContent2, workContent } from "./aboutContent.js"


const workBtn = document.querySelector('#work-btn')
const aboutBtn = document.querySelector('#about-btn')


let about =  document.querySelector('.about')
about.innerHTML = aboutContent


aboutBtn.addEventListener('click', () => {
    about.innerHTML = aboutContent2
    
})

workBtn.addEventListener('click', () => {
    about.innerHTML = workContent
})

// finder content scroll animation

const hiddenContent = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-content')
        } 
    })
})

hiddenContent.forEach((el) => {observer.observe(el)})
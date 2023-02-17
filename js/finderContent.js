import { aboutContent, aboutContent2} from "./aboutContent.js"
import { workContent } from "./workContent.js"
import { folderSize } from "./finderFolderSize.js"

const workBtn = document.querySelector('#work-btn')
const aboutBtn = document.querySelector('#about-btn')


let about =  document.querySelector('.about')
about.innerHTML = aboutContent


aboutBtn.addEventListener('click', () => {
    about.innerHTML = aboutContent2
    
})

workBtn.addEventListener('click', () => {
    about.innerHTML = workContent
    hiddenContent = document.querySelectorAll('.hidden')
    hiddenContent.forEach((el) => {observer.observe(el)})
    folderSize()
})
// finder content scroll animation

var hiddenContent = document.querySelectorAll('.hidden')
console.log(hiddenContent)

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-content')
        } 
    })
})

hiddenContent.forEach((el) => {observer.observe(el)})
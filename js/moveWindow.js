function moveWindow(name, header, divX, divY){
    this.name = name,
    this.header = header,
    this.divX = divX, //divX is the start value of div on screen from left
    this.divY = divY, //divY is the start value of div on screen from top
    this.isDragging = false,
    this.focus = false
    header.addEventListener('mousedown', dragOn.bind(this)),
    header.addEventListener('mouseup', dragOff.bind(this)),
    header.addEventListener('mouseout', mouseOut.bind(this)),
    header.addEventListener('mousemove', move.bind(this))
    
    function dragOn(e){
        mouseStartX = e.clientX
        mouseStartY = e.clientY
        this.isDragging = true
        for(let c = 0; c < windows.length; c++){
            windows[c].focus = false
        }
        let objFocus = testing(windows, this)[0]
        objFocus.focus = true
        console.log(objFocus)
    }
    
    function dragOff(e){
        mouseEndX = e.clientX
        mouseEndY = e.clientY
        this.divX += mouseEndX - mouseStartX
        this.divY += mouseEndY - mouseStartY
        this.isDragging = false
    }
    
    function mouseOut(){
        this.isDragging = false
    }

    function move(e){
        if(this.isDragging){
            this.name.style.left = `${e.clientX - (mouseStartX - this.divX)}px`
            this.name.style.top = `${e.clientY - (mouseStartY - this.divY)}px`
        }
    }
}

var mouseEndX
var mouseEndY
var mouseStartX
var mouseStartY

var calculator = new moveWindow(document.querySelector('.calculator'), document.querySelector('.calculator-header'), 50, 50)
var pomodoro = new moveWindow(document.querySelector('.pomodoro'), document.querySelector('.pomodoro-header'), 450, 50)
var finder = new moveWindow(document.querySelector('.finder'), document.querySelector('.finder-header'), 600, 50)

const windows = [
    calculator,
    pomodoro,
    finder
]

function testing(array, item){
    let index = array.indexOf(item)
    let arrCopy = [...array]
    arrCopy = arrCopy.splice(index, 1)
    return arrCopy
}
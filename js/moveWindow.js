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
    name.addEventListener('click', focus.bind(this))
    function dragOn(e){
        mouseStartX = e.clientX
        mouseStartY = e.clientY
        this.isDragging = true
        setFocus(this)
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

    function focus(e){
        setFocus(this)
    }
    
    function setFocus(e){
        // both codes make only the cliced obj receive the true on  obj.focus so the z-index only became effective on that obj
        // make all the obj.focus receive false
        for(let c = 0; c < windows.length; c++){
            windows[c].focus = false
        }
        // make the clicked obj.focus receive true
        var objFocus = testing(windows, e)[0]
        objFocus.focus = true
        //code below put z index on the obj with the obj.focus: true
        for(let c = 0; c < windows.length; c++){
            if(windows[c].focus){
                windows[c].name.style.zIndex = 1
            } else {
                windows[c].name.style.zIndex = 0
            }
        }
    }
}

var mouseEndX
var mouseEndY
var mouseStartX
var mouseStartY

var calculator = new moveWindow(document.querySelector('.calculator'), document.querySelector('.calculator-header'), 50, 50)
var pomodoro = new moveWindow(document.querySelector('.pomodoro'), document.querySelector('.pomodoro-header'), 450, 50)
var finder = new moveWindow(document.querySelector('.finder'), document.querySelector('.finder-header'), 400, 50)

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



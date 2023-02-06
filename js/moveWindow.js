function moveWindow(name, header, divX, divY){
    this.name = name,
    this.header = header,
    this.divX = divX,
    this.divY = divY,
    this.isDragging = false,
    header.addEventListener('mousedown', dragOn.bind(this)),
    header.addEventListener('mouseup', dragOff.bind(this)),
    header.addEventListener('mousemove', move.bind(this))
    
    function dragOn(e){
        mouseStartX = e.clientX
        mouseStartY = e.clientY
        this.isDragging = true
    }
    
    function dragOff(e){
        mouseEndX = e.clientX
        mouseEndY = e.clientY
        this.divX += mouseEndX - mouseStartX
        this.divY += mouseEndY - mouseStartY
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

function moveWindow(name, header){
    this.name = name,
    this.header = header,
    this.divX = 0,
    this.divY = 0,
    this.isDragging = false,
    header.addEventListener('mousedown', showPos),
    header.addEventListener('mouseup', dragOf)
    
}

var mouseEndX
var mouseEndY
var mouseStartX
var mouseStartY

const calculator = new moveWindow(document.querySelector('.calculator'), document.querySelector('.calculator-header'))

function showPos(e){
    mouseStartX = e.clientX
    mouseStartY = e.clientY
    calculator.isDragging = true
    console.log(e.clientX)
}

function dragOf(e){
    mouseEndX = e.clientX
    mouseEndY = e.clientY
    calculator.divX += mouseEndX - mouseStartX
    calculator.divY += mouseEndY - mouseStartY
    calculator.isDragging = false
}

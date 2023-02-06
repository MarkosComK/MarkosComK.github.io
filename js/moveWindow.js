function moveWindow(name, header, obj){
    this.name = name,
    this.header = header,
    this.divX = 50,
    this.divY = 50,
    this.isDragging = false,
    header.addEventListener('mousedown', (e, name) => {dragOn(e, obj)}),
    header.addEventListener('mouseup', (e, name) => {dragOff(e, obj)}),
    header.addEventListener('mousemove', move)
    
}

var mouseEndX
var mouseEndY
var mouseStartX
var mouseStartY
var calculator = new moveWindow(document.querySelector('.calculator'), document.querySelector('.calculator-header'))


function dragOn(e, name){
    mouseStartX = e.clientX
    mouseStartY = e.clientY
    name.isDragging = true
    console.log(name)
}

function dragOff(e){
    mouseEndX = e.clientX
    mouseEndY = e.clientY
    calculator.divX += mouseEndX - mouseStartX
    calculator.divY += mouseEndY - mouseStartY
    calculator.isDragging = false
    // console.log(name)
}

function move(e){
    if(calculator.isDragging){
        calculator.name.style.left = `${e.clientX - (mouseStartX - calculator.divX)}px`
        calculator.name.style.top = `${e.clientY - (mouseStartY - calculator.divY)}px`
    }
}

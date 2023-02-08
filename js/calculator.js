const items = document.querySelectorAll('#number')
const sumBtn = document.querySelector('#sum')
const equalBtn = document.querySelector('#equal')

console.log(items[4].dataset.number)

var firstValue = []
var opt = []
var secondValue = []
var result = []


var operationPress = false

items.forEach((item) => {
    item.addEventListener('click', () => {
        if(opt.length > 0){
            secondValue.push(Number(item.dataset.number))
        } else {
            firstValue.push(Number(item.dataset.number))
        }
    })
})

sumBtn.addEventListener('click', () => {
    opt = sumBtn.dataset.opt
    console.log(opt)
})

equalBtn.addEventListener('click', () => {
    firstValue = Number(firstValue.join(''))
    secondValue = Number(secondValue.join(''))
    if(opt == '+'){
        result = sum(firstValue, secondValue)
    }
    operationPress = true
    if(operationPress){
        console.log(result)
    }
})



function sum(n1, n2){
    return n1+n2
}

function displayResult(){
    return console.log(result)
}

const items = document.querySelectorAll('#number')
const sumBtn = document.querySelector('#sum')
const equalBtn = document.querySelector('#equal')
const clearBtn = document.querySelector('#clear')

const screen = document.querySelector('.result')
const operationScreen = document.querySelector('.operation')


var firstValue = []
var opt = []
var secondValue = []
var result = []


var operationPress = false
// Add listener to each number button
items.forEach((item) => {
    item.addEventListener('click', () => {
        if(opt.length > 0){
            secondValue.push(item.dataset.number)
            screen.innerText = secondValue.join('')
        } else {
            firstValue.push(item.dataset.number)
            screen.innerText = firstValue.join('')
        }
    })
})


// sum button
sumBtn.addEventListener('click', () => {
    if(firstValue.length > 0){
        opt = sumBtn.dataset.opt
        operationScreen.innerText = opt
    }
})


// equal button
equalBtn.addEventListener('click', () => {
    firstValue = Number(firstValue.join(''))
    secondValue = Number(secondValue.join(''))
    if(opt == '+'){
        result = sum(firstValue, secondValue)
    }
    operationPress = true
    if(operationPress){
        screen.innerText = result
    }
    firstValue = [result]
    secondValue = []
})


// clear the calculator stats (AC button)
clearBtn.addEventListener('click', () => {
    firstValue = []
    opt = []
    secondValue = []
    result = []
    screen.innerText = '0'
    operationScreen.innerText = opt
})


// calculator functions 
function sum(n1, n2){
    return n1+n2
}


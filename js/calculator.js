const items = document.querySelectorAll('.square')

console.log(items[4].dataset.number)

var firstValue = []
var opt = []
var secondValue = []
var result = ['ola mundo']


var operationPress = false

items.forEach((item, pos) => {
    item.addEventListener('click', () => {
        if (item.dataset.number == undefined){
            opt.push(item.dataset.opt)
            if(opt.length > 0){
                operationPress = true
            }
        } else {
            if(operationPress){
                secondValue.push(item.dataset.number)
            } else {
                firstValue.push(item.dataset.number)
            }
        }   
        var firstValueStr = Number(firstValue.join(''))
        console.log(firstValueStr)
        console.log(opt)
    })
})


function sum(n1, n2){
    return n1+n2
}

function displayResult(){
    return console.log(result)
}

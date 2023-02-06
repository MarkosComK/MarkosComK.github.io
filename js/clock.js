var clockli = document.querySelector('.clock')

const date = new Date()
var hours = date.getHours()
var minutes = date.getMinutes()

clockli.innerHTML = `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}`
setInterval(increaseMinute, 60000)

function increaseMinute(){
    if(minutes < 59){
        minutes++
    } else {
        minutes = 0
        hours++
    }
    clockli.innerHTML = `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}`
}

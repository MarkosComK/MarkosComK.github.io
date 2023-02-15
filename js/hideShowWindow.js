function changeDisplay(button, div, closeBtn){
    this.button = button
    this.div = div
    this.closeBtn = closeBtn
    closeBtn.addEventListener('click', close.bind(this))
    button.addEventListener('click', changeDisplay.bind(this))

    function close(){
        this.div.style.display = 'none'
    }

    function changeDisplay(){
        if(this.div.style.display == 'none'){
            this.div.style.display = 'inline'
        } else{
            this.div.style.display = 'none'
        }
    }

}

var calculator = new changeDisplay(document.querySelector('#calculatorBtn'), document.querySelector('.calculator'), document.querySelector('.close-calculator'))
var finder = new changeDisplay(document.querySelector('#finderBtn'), document.querySelector('.finder'), document.querySelector('.close-finder'))

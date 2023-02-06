function changeDisplay(button, div){
    this.button = button
    this.div = div
    button.addEventListener('click', changeDisplay.bind(this))
    function changeDisplay(){
        if(this.div.style.display == 'none'){
            this.div.style.display = 'inline'
        } else{
            this.div.style.display = 'none'
        }
    }
}

var calculator = new changeDisplay(document.querySelector('#calculatorBtn'), document.querySelector('.calculator'))
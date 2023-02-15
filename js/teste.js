export function setFocus(e){
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
let vezDoX = true

function getEl(element){
    return document.querySelector(element);
}

function getAllEl(element){
    return document.querySelectorAll(element);
}

function changePiece(position){
    let el = getAllEl(".game--column")[position]

    if(!el.classList.contains("cross") && !el.classList.contains("naught")){
        el.classList.add(vezDoX?"cross":"naught")
        vezDoX = !vezDoX
        getEl("#game--turn").innerText = vezDoX?"vez do X":"vez do O"
    }
    
}

let vezDoX = true

function getEl(element){
    return document.querySelectorAll(element);
}

function changePiece(position){
    if(vezDoX){
        getEl(".game--column")[position].classList.add("cross")
    }
}

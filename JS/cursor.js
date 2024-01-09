

//MAKING THE CURSOR MOVE FIRST
let myCursor = document.querySelector(".own-cursor");

document.addEventListener('mousemove', moveMyCursor);

function moveMyCursor(event){
    myCursor.style.translate = event.clientX + 'px ' + event.clientY + 'px';
}
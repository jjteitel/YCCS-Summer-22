let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/powerplay.webp') {
        myImage.setAttribute('src', 'images/game-winner.jpg');
    }else {
        myImage.setAttribute('src', 'images/powerplay.webp');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    }else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Welcome to the Blueshirts, ' + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
}else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to the Blueshirts, '  + storedName;
}
myButton.onclick = function() {
    setUserName();
}
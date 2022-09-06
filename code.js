// sets up for checkbox to display color name
let btnShow = document.querySelector('button');
let result = document.querySelector('h1');
let container = document.getElementById('container');


btnShow.addEventListener('click', () => {
    //on click color name is shown
    let checkbox = document.querySelector('input[type="checkbox"]:checked');
    result.innerText = checkbox.parentElement.textContent;
    
    // take the contents of the checkbox and turn them to the color of box
    let color1 = result.innerText = checkbox.parentElement.textContent;
    let container = document.getElementById('container');
    container.style.background = color1;

}) 
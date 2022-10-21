const btnBackGround = document.querySelector('#btn');
const inputColor = document.querySelector('#input-color');
const colorMain = document.querySelector('.container-body');

btnBackGround.addEventListener('click', clickColor);

function clickColor() {
    let valueInput = inputColor.value
    
    if(!valueInput.includes('#')) {
        valueInput = `#${valueInput}`
    }
    colorMain.style.background = `${valueInput}`
}
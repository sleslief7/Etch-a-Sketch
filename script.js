let container = document.querySelector('#container');
let btn = document.querySelector('button');
let gridNum;

const buildGrid = (squares = 16) => {
    container.innerHTML = '';

    for(i = 0; i < (squares * squares); i++) {
        let square = document.createElement('div');
        square.classList.add('squares');
        square.style.width = `${Math.floor(100 / squares)}%`
        square.addEventListener('mouseover',  onHover);
        container.appendChild(square);
    }
}

const onHover = e => {
    let el = e.target;
    if(!el.style.backgroundColor) {
        const randomRGB = () => Math.floor(Math.random() * 255) + 1;
        let color = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
        el.style.backgroundColor = color;
        el.style.opacity = 0.1;
    } else {
        let opacity = Number(el.style.opacity);
        if(opacity < 1) {
            el.style.opacity = opacity + 0.1;
        }
    }
    
}
const isValid = (num) => {
    num = Number(num);
    return !isNaN(num) && num >= 0 && num <= 100;
  //return !(isNaN(num) || num < 0 || num > 100);
}

btn.addEventListener('click', () => {
    gridNum = prompt('How many squares per side would you like?');
    while (!isValid(gridNum)) {
        gridNum = prompt('Please enter a valid number between 0 and 100');
    }
    buildGrid(gridNum);
});

buildGrid();
let container = document.querySelector('div[class=container]');
let resInput = document.querySelector('input[id=resolutionInput]');
let bgInput = document.querySelector('input[id=backgroundInput]');
let drwInput = document.querySelector('input[id=drawingInput]');

let defaultBg = "black";
let cntWidth = 600;
let cntWidthStr = String(`${cntWidth}px`);
let drwColor = randomRGB();
container.style.width = cntWidthStr;

let resolution = 64;

container.addEventListener('mouseover', (e) => {
    target = e.target;
    if (!drwInput.value) {
        target.style.backgroundColor = randomRGB();
    } else {
        target.style.backgroundColor = drwInput.value;  
    }
})

container.addEventListener('mouseup', (e) => {
    if (e.button == 1) {
        resetGrid();
    }
})

resInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        if (resInput.valueAsNumber > 128) {
            alert("Please enter a value less than or equal to 128.");
            return;
        } else {
            resolution = resInput.valueAsNumber;
            resetGrid();
        }
    }
})

bgInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        sqDivs = container.querySelectorAll('div');
        for (div of sqDivs) {
            div.style.backgroundColor = bgInput.value;
        }
    }
})

drwInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        drwColor = drwInput.value;
    }
})

function resetGrid() {
    sqDivs = container.querySelectorAll('div');
    for (div of sqDivs) {
        div.remove();
    }
    createGrid(resolution);
}

function createGrid(resolution) {
    let numSquares = resolution*resolution;
    let sqWidth = cntWidth / resolution;
    let sqWidthStr = String(sqWidth);

    for (let i = numSquares; i > 0; i--) {
        let sqDiv = document.createElement('div');
        console.log("SqDiv height ",sqDiv.style.height);
        if (bgInput.value == undefined){
            sqDiv.style.backgroundColor = defaultBg;
        } else {
            sqDiv.style.backgroundColor = bgInput.value;
        }
        sqDiv.style.width = `${sqWidthStr}px`;
        sqDiv.style.height = `${sqWidthStr}px`;
        container.appendChild(sqDiv);
    }
}

function randomRGB(){
    function randomizeColor(){
        let colors = 255;
        randColor = Math.random(1) * colors;
        return randColor;
    }
    RGBone = Math.round(randomizeColor());
    RGBtwo = Math.round(randomizeColor());
    RGBthree = Math.round(randomizeColor());
    RGBrandom = `rgb(${RGBone},${RGBtwo},${RGBthree})`;
    return RGBrandom;
}

function initializeGrid(){
    createGrid(resolution);
    sqDivs = container.querySelectorAll('div');
        for (div of sqDivs) {
            div.style.backgroundColor = defaultBg;
        }
}

initializeGrid();
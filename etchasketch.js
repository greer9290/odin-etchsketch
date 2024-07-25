let container = document.querySelector('div[class=container]');

cntWidth = 1000;
cntWidthStr = String(`${cntWidth}px`);
container.style.width = cntWidthStr;


let resolution = 24;
let numSquares = resolution*resolution;
let sqWidth = cntWidth / resolution;
let sqWidthStr = String(sqWidth);
console.log("sqWidth: ",sqWidth);
console.log("sqWidthStr: ", sqWidthStr);

container.addEventListener('mouseover', (e) => {
    target = e.target;
    target.style.backgroundColor = "red";
})

container.addEventListener('mouseup', (e) => {
    if (e.button == 1) {
        sqDivs = container.querySelectorAll('div');
        for (div of sqDivs) {
            div.style.backgroundColor = "black";
        }
    }
})

for (let i = numSquares; i > 0; i--) {
    let sqDiv = document.createElement('div');
    console.log("SqDiv height ",sqDiv.style.height);
    sqDiv.style.cssText = ("color: white; background-color:black");
    sqDiv.style.width = `${sqWidthStr}px`;
    sqDiv.style.height = `${sqWidthStr}px`;
    container.appendChild(sqDiv);
}
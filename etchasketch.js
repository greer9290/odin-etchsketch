let container = document.querySelector('div[class=container]');




let numSquares = 16;

for (let i = numSquares; i > 0; i--) {
    let sqDiv = document.createElement('div');
    sqDiv.style.cssText = ("width: 200px; height: 200px; color: white; background-color:black");
    container.appendChild(sqDiv);
    sqDiv.textContent = `${i}`;
}
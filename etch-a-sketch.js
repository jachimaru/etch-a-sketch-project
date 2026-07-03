const container = document.querySelector("#container");
const boxAttribute = "border: solid 1px black; background: white; height: 50px; width: 50px";
let color = 'black';
let gridAmount = 16
const gridAmountSquared = Math.pow(gridAmount, 2);
const dimensions = gridAmount * 50;
container.setAttribute("style", "display: flex; flex-wrap: wrap; margin-inline: auto; width:"+ dimensions + "px");
const btn = document.querySelector("#button");
btn.textContent = "Change Grid Size";
btn.addEventListener("click", () => {
    let grid = prompt("Grid Size: ");
    parseInt(grid);
    if ((grid > 100) || (grid <=0)) {
        gridAmount = gridAmount;
    } else {
        gridAmount = grid;
        console.log(gridAmount)
    }
    let newBox = Math.pow(gridAmount, 2)
    let newDimensions = gridAmount * 50;
    container.setAttribute("style", "display: flex; flex-wrap: wrap; margin-inline: auto; width:"+ newDimensions + "px");
    console.log(newBox)
    createBox(newBox)
})

function chooseColor() {
    color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0);
    return color;
}

function createBox(num) {
    container.replaceChildren()
    for (let i = num; i > 0; i--) {
        const box = document.createElement("div");
        box.setAttribute("style", boxAttribute);
        box.addEventListener("mouseenter", (e) => {
            chooseColor();
            e.target.style.background = color;
        });
        container.appendChild(box);
    };
};

createBox(gridAmountSquared);
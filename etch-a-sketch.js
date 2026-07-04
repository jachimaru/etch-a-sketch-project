const container = document.querySelector("#container");
let randomOn = false;
let color = 'black';
let gridAmount = 16
const gridRoot = Math.sqrt(gridAmount)
const gridAmountSquared = Math.pow(gridAmount, 2);
const dimensions = 800;
let boxSize = dimensions / gridAmount
let boxAttribute = "border: solid 1px black; background: white; flex: 0 0 auto; width:"+ boxSize + "px; height:"+ boxSize + "px";
container.setAttribute("style", "display: flex; flex-wrap: wrap; margin: 10px; margin-inline: auto; width:"+ dimensions + "px; height:"+ dimensions + "px"); // 
const btn = document.querySelector("#button");
const randomButton = document.querySelector("#randomizer");
randomButton.textContent = "Turn on Random Colors";
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
    boxSize = dimensions / gridAmount
    boxAttribute = "border: solid 1px black; background: white; flex: 0 0 auto; width:"+ boxSize + "px; height:"+ boxSize + "px";
    // let newDimensions = gridAmount * 50;
    // container.setAttribute("style", "display: flex; flex-wrap: wrap; margin-inline: auto; width:"+ newDimensions + "px; height:"+ newDimensions + "px");
    console.log(newBox)
    createBox(newBox)
});

randomButton.addEventListener("click", () => {
    if (!randomOn) {
        randomOn = true;
        randomButton.textContent = "Turn off Random Colors";
        return randomOn
    } else if (randomOn) {
        randomOn = false;
        randomButton.textContent = "Turn on Random Colors";
        return randomOn
    }
});

function chooseColor() {
    color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0);
    return color;
};

function createBox(num) {
    container.replaceChildren()
    console.log(boxSize)
    console.log(boxAttribute)
    for (let i = num; i > 0; i--) {
        const box = document.createElement("div");
        box.setAttribute("style", boxAttribute);
        box.addEventListener("mouseenter", (e) => {
            if (randomOn) {
                chooseColor();
            } else if (!randomOn) {
                color = 'black';
            }
            e.target.style.background = color;
        });
        container.appendChild(box);
    };
};

createBox(gridAmountSquared);
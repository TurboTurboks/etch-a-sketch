const sqrNumButton = document.querySelector("#sqaureNumber")
const container = document.querySelector("#container")


let gridSize = 12;
createTable(gridSize);

sqrNumButton.addEventListener("click", () => {
    gridSize = Number(prompt("Unesite novu velicinu grida: "));
    if (gridSize < 1 || gridSize > 100){
        alert("Nope!");
        return;
    }
    container.replaceChildren();
    createTable(gridSize)
})





function createTable(gridSize) {
    for (let i = 0; i < gridSize; i++) {
    const newColumnDiv = document.createElement("div");
    newColumnDiv.className = "column";
    container.appendChild(newColumnDiv);
    for (let j = 0; j < gridSize; j++) {
        const newRowDiv = document.createElement("div");
        newRowDiv.className = "square";
        newColumnDiv.appendChild(newRowDiv);

        newRowDiv.addEventListener("mouseenter", () => {
            if (newRowDiv.style.backgroundColor == "") {
                newRowDiv.style.backgroundColor = randomHex();
                newRowDiv.style.opacity = 0.1;
            }
            else{
                newRowDiv.style.opacity = parseFloat(newRowDiv.style.opacity) + 0.1;
            }
            
        })

       
    }
}
}

const randomHex = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

console.log(randomHex()); // Example output: "#7b4cff"



const sqrNumButton = document.querySelector("#sqaureNumber")

let gridSize = 16;

function changeGrid(newGridSize) {
    gridSize = newGridSize
}





const container = document.querySelector("#container")

for (let i = 0; i < gridSize; i++) {
    const newColumnDiv = document.createElement("div");
    newColumnDiv.className = "column";
    container.appendChild(newColumnDiv);
    for (let j = 0; j < gridSize; j++) {
        const newRowDiv = document.createElement("div");
        newRowDiv.className = "square";
        newColumnDiv.appendChild(newRowDiv);

        newRowDiv.addEventListener("mouseenter", () => {
            newRowDiv.style.backgroundColor = "red";
        })

       
    }
}



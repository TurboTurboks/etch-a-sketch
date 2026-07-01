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
            newRowDiv.style.backgroundColor = "red";
        })

       
    }
}
}




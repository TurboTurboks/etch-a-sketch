const container = document.querySelector("#container")


for (let i = 0; i < 16; i++) {
    const newColumnDiv = document.createElement("div");
    newColumnDiv.className = "column";
    container.appendChild(newColumnDiv);
    for (let j = 0; j < 16; j++) {
        const newRowDiv = document.createElement("div");
        newRowDiv.className = "square";
        newColumnDiv.appendChild(newRowDiv);

        newRowDiv.addEventListener("mouseenter", () => {
            newRowDiv.style.backgroundColor = "red";
        })
    }
}



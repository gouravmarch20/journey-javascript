function setupGrid() {
    // Add new grid cells when clicking the "Add Cell" button
    document.getElementById("addCell").addEventListener("click", function () {
        const grid = document.getElementById("grid");
        const newCell = document.createElement("div");
        newCell.classList.add("grid-cell");
        grid.appendChild(newCell);
    });

    // Use event delegation for click and hover events
    document.getElementById("grid").addEventListener("click", function (event) {
        if (event.target.classList.contains("grid-cell")) {
            event.target.style.backgroundColor = 
                event.target.style.backgroundColor === "red" ? "blue" : "red";
        }
    });

    document.getElementById("grid").addEventListener("mouseover", function (event) {
        if (event.target.classList.contains("grid-cell")) {
            event.target.style.border = "2px solid yellow";
        }
    });

    document.getElementById("grid").addEventListener("mouseout", function (event) {
        if (event.target.classList.contains("grid-cell")) {
            event.target.style.border = "1px solid black";
        }
    });
}

// Call function
setupGrid();

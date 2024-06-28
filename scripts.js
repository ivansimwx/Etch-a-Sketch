const container = document.querySelector("div");
let row = 16;
let col = 16;
const max_dim = 480;


function inputSquare() {
    row = parseInt(prompt("Please enter a number for the grid size. Max is 100."));
    col = row;
    delGrid();
    createGrid();
}

function createGrid() {
    const divSqDim = max_dim / row + "px";
    let opacityLevel = 0;
//create the necessary number of rows
for (let i=0; i<row; i++) {
//create 1 complete row
    //create parent div to contain 1 row
    const rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row-class");
    // create grid squares (represented by a div) based on the number of columns/squares there are in a row.
        for (let j=0; j<col; j++) {
            const rowSquare = document.createElement("div");
            rowSquare.setAttribute("class", "row-square");
            rowSquare.style.border= "2px solid black";
            rowSquare.style.width = divSqDim;
            rowSquare.style.height = divSqDim;
            console.log(divSqDim);
            rowSquare.addEventListener("mouseover", function() {
                rowSquare.style.backgroundColor = sqRandomColor(); //hover effect
            })
            rowSquare.addEventListener("mouseout", function(){
                if (opacityLevel<100) {
                    opacityLevel = opacityLevel+10;
                }
                rowSquare.style.backgroundColor = "black";
                let opacityStr = opacityLevel+"%";
                console.log(opacityStr);
                rowSquare.style.opacity = opacityStr;
            })

            rowDiv.appendChild(rowSquare); //append each square to the row
        }
    //append the entire row to container div
    container.appendChild(rowDiv);
}
}

function delGrid() {
    document.querySelectorAll(".row-class").forEach(e => e.remove());;
    document.querySelectorAll(".row-square").forEach(e => e.remove());;
}

function sqRandomColor() {
    //0xFFFFFF is 16777215
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const randomColorStr = "#"+ randomColor;
    return randomColorStr;
}

//create button
const btnSqPrompt = document.createElement("button");
btnSqPrompt.textContent = "Enter grid size";
btnSqPrompt.addEventListener("click", inputSquare);
container.appendChild(btnSqPrompt)

createGrid();

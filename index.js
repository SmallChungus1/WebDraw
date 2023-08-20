
const grid = document.querySelector(".container")
const slider = document.getElementById("sizeSlider")
const sliderOutput = document.getElementById("sliderOutput")
sliderOutput.innerHTML=slider.value
var size = slider.value
var squares = document.querySelectorAll(".squareStyle")

function gridDrawSession(){
    console.log("Grid Draw Session Called")
    squares.forEach(square => {

        square.addEventListener("mousedown",() => {
            console.log("detected")
            square.style.backgroundColor="black"
        })
        
    })
}

function createGrid(size){
    grid.innerHTML=""
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    for(i = 0; i<size**2; i++){
        const canvasSquare = document.createElement("div")
        canvasSquare.classList.add("squareStyle")
        grid.appendChild(canvasSquare)
        
    }
    squares = document.querySelectorAll(".squareStyle")
    gridDrawSession()

}




createGrid(size)




function removeGrid(){
    squares.forEach(square=>{
        square.remove()
    })
}

slider.addEventListener("input",()=>{
    const newSliderValue = slider.value
    sliderOutput.innerHTML=slider.value
    console.log(slider.value)
    size = slider.value
    clearGrid()
    removeGrid()
    createGrid(size)
    squares = document.querySelectorAll(".squareStyle")

})


const clearBtn = document.querySelector("#clearButton")

function clearGrid(){
    console.log("clearing grid")
    squares.forEach(square=>{
        square.style.backgroundColor="white"
    })   

}
clearBtn.addEventListener("click", clearGrid)

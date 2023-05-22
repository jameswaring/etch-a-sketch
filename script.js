let color = "black";
window.onload = function() {
    setGrid(16)
  };


function createGrid(size){
    console.log("creating")
    const container = document.querySelector('.grid-holder')
    container.innerHTML = ""
    const startGrid = document.createElement('div')
    startGrid.classList.add('grid')
    startGrid.style.cssText = `display: grid; grid-template-columns: repeat(${size}, 30px); grid-template-rows: repeat(${size}, 30px);`
    container.appendChild(startGrid)
}

function setGrid(size){
    createGrid(size)
    const gridcontainer = document.querySelector('.grid')
    for(let i=0; i<(size*size); i++){
        const griditem = document.createElement('div')
        griditem.className = 'grid-item' 
        gridcontainer.appendChild(griditem)
    }
}

document.body.addEventListener('mouseover', (e) => {
    if(e.target.className == "grid-item"){
        e.target.style.backgroundColor = color;
    }
})

document.body.addEventListener('click', (e) => {
    if(e.target.id == "reset"){
        setGrid(document.getElementById("slider").value)
    }
})

document.body.addEventListener('change', (e) => {
    if(e.target.id == "slider"){
        let chosenSize = document.getElementById("slider").value
        document.querySelector('.reader').innerHTML = chosenSize + " x " + chosenSize
        setGrid(chosenSize)
    }
    if(e.target.id == "colorpicker"){
        let localcolor = document.getElementById("colorpicker").value
        color = localcolor
    }
})
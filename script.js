window.onload = function() {
    createGrid(16)
    setGrid(16)
  };


function createGrid(size){
    const container = document.querySelector('.container')
    const startGrid = document.createElement('div')
    startGrid.classList.add('grid')
    // need size below to take the parameter from the variable 'size' and not 16
    startGrid.style.cssText = `display: grid; grid-template-columns: repeat(${size}, 30px); grid-template-rows: repeat(${size}, 30px);`
    container.appendChild(startGrid)
}

function setGrid(size){
    createGrid(size)
    const gridcontainer = document.querySelector('.grid')
    document.getElementsByClassName('grid')[0].textContent = '';
    for(let i=0; i<(size*size); i++){
        const griditem = document.createElement('div')
        griditem.className = 'grid-item' 
        gridcontainer.appendChild(griditem)
    }
}

let blockClick = document.body.addEventListener('mouseover', function(e){
    if(e.target.className == "grid-item"){
        e.target.style.backgroundColor = 'black';
    }
})

let sliderChange = document.body.addEventListener("input", function(e){
    let chosenSize = document.getElementById("slider").value
    document.querySelector('.reader').innerHTML = chosenSize
    setGrid(chosenSize)
})
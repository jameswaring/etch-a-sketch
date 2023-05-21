window.onload = function() {
    setGrid(16);
  };


function setGrid(size){
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
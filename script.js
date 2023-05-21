const gridcontainer = document.querySelector('.grid')


for(let i=0; i<256; i++){
    const griditem = document.createElement('div')
    griditem.className = 'grid-item' 
    gridcontainer.appendChild(griditem)
}

let blockClick = document.body.addEventListener('mouseover', function(e){
    if(e.target.className == "grid-item"){
        console.log(e)
        e.target.style.backgroundColor = 'black';
    }
})

range.addEventListener("input", function(e){
    console.log(e)
})
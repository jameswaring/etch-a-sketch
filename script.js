const gridcontainer = document.querySelector('.grid')


for(let i=0; i<256; i++){
    const griditem = document.createElement('div')
    griditem.className = 'grid-item' 
    gridcontainer.appendChild(griditem)
}
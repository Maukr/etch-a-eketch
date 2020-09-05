function makeGrid(row, col){
    const container = document.querySelector('.container');
    container.style.setProperty('--grid-rows', row);
    container.style.setProperty('--grid-cols', col);

    for(let i=0 ; i<row; i++){
        for(let j=0; j<col; j++){
            const div = document.createElement('div');
            div.addEventListener('mouseenter', e => {
                div.style.setProperty('background', 'black');
            });
            container.appendChild(div).className = 'grid-item';
        }
    }
}

makeGrid(45, 45);


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

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function deleteGrid(){
    
    const container = document.querySelector('.container');
    const divs = Array.from(document.querySelectorAll('.grid-item'));
    divs.forEach(div => {
        container.removeChild(div);
    });
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', e => {
    const divsGrid = Array.from(document.querySelectorAll('.grid-item'));
    divsGrid.forEach( div => {
        div.style.setProperty('background', 'white');
    });
})

const makeGridButton = document.querySelector('#make-grid');
makeGridButton.addEventListener('click', e => {
    
    let rows;
    let cols;
    
    do{
        rows = Number(prompt('Filas: (mínimo 4)', 4));
        cols = Number(prompt('Columnas (mínimo 4): ', 4));
    }while(isNaN(rows) || isNaN(cols) || rows < 4 || cols < 4);
    
    deleteGrid();
    makeGrid(rows, cols);
})

const randomButton = document.querySelector('#random');
randomButton.addEventListener('click', e => {
    const divsGrid = Array.from(document.querySelectorAll('.grid-item'));
    const span = document.querySelector('#on-off');

    
    clearButton.click();
    if(span.innerHTML == '(OFF)'){
        divsGrid.forEach( div => {
            div.addEventListener('mouseenter', e => {
                div.style.setProperty('background', random_rgba());
            });
        });
        span.innerHTML = '(ON)';
    }else{
        divsGrid.forEach( div => {
            div.addEventListener('mouseenter', e => {
                div.style.setProperty('background', 'black');
            });
        });
        span.innerHTML = '(OFF)';
    }
    
   
});

makeGrid(32, 32);



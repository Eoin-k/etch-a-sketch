let squares = 0;
let fillColor = '';
let playAreaSize = document.getElementById('boardwrapper');

let numOfSquares = document.querySelectorAll('.squaresbutton');
for(let i = 0; i<numOfSquares.length; i++){
    numOfSquares[i].addEventListener('click', function(e){
        squares = e.target.value
        console.log(squares)
        createSquares();
    })
}
function innerFill() {
    document.querySelectorAll('.innersquare').forEach(item => {
       item.addEventListener('mouseenter', function(e){ 
           item.style.backgroundColor = '#000';
           console.log(item)
       })
    })
   }
   
function createSquares(){
    for (let i = 0; i<squares; i++){
        let newSquare = document.createElement('div')
        newSquare.classList.add('gamesquare')
        let wrapper = document.getElementById('boardwrapper');
        wrapper.appendChild(newSquare);
        for (let j = 0; j<squares; j++){
            let innersquare = document.createElement('div');
            innersquare.classList.add('innersquare');
            let parent = document.querySelectorAll('.gamesquare')
            newSquare.appendChild(innersquare)
    }
}

innerFill();
}






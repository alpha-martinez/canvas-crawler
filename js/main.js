console.log('jello');


document.addEventListener('DOMContentLoaded', () => {

    // the movement tag
    let movementDisplay = document.getElementById('movement');
    //canvas 
    let game = document.getElementById('game');

    game.setAttribute('height', 400);
    game.setAttribute('width', 400);
    let ctx = game.getContext('2d');
    //context


    const drawBox = (x, y, size, color) => {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, size, size);
    }

    drawBox(200, 100, 200, 'hotpink');
    //DRAW A BOX
    //set a fill color
    ctx.fillStyle = '#ffffff';
    //set a line color
    ctx.strokeStyle = 'red';
    //set a line width
    ctx.lineWidth = 5;
    //call the fillReact to draw the filled square
    ctx.fillRect(10, 10, 100, 100);
    //call strokeReact to draw the line rectangle
    ctx.strokeRect(10, 10, 100, 100);

    

})

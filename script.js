
const canvas = document.getElementById("chessboard");
const ctx = canvas.getContext('2d');

    canvas.width = 240;
    canvas.height = 240;

function drawBoard() {

    ctx.strokeRect(0,0,canvas.width,canvas.height);

    for (let i = 0; i <= 8; i++) {
        for (let h = 0; h <= 4; h++) {
        if (i % 2 !== 0) {
            ctx.fillStyle = "#9999CC";
            ctx.fillRect(h*30*2, i*30, 30, 30);
        } else {
            ctx.fillStyle = "#9999CC";
            ctx.fillRect(h*60-30,i*30,30,30);
        }}
    }
}

drawBoard();

const grid = [
    {position: 0},
    {position: 30},
    {position: 60},
    {position: 90},
    {position: 120},
    {position: 150},
    {position: 180},
    {position: 210},
];

function roundedCoordinats(exactCoord) {
    if (exactCoord < grid[1].position) {
        return grid[0].position;
    } else if (exactCoord < grid[2].position) {
        return grid[1].position;
    } else if (exactCoord < grid[3].position) {
        return grid[2].position;
    } else if (exactCoord < grid[4].position) {
        return grid[3].position;
    } else if (exactCoord < grid[5].position) {
        return grid[4].position;
    } else if (exactCoord < grid[6].position) {
        return grid[5].position;
    } else if (exactCoord < grid[7].position) {
        return grid[6].position;
    } else {
        return grid[7].position;
    }
}

canvas.onclick = function getCoordinats() {
    let coordX = event.offsetX;
    let coordY = event.offsetY;
    console.log(roundedCoordinats(coordX));
}


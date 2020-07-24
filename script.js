
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

const grid = [{pos0: 0}, {pos1: 30}, {pos2: 60}, {pos3: 90}, {pos4: 120}, {pos5: 150}, {pos6: 180}, {pos7: 210}];

canvas.onclick = function getCoordinats() {
    let coordX = event.offsetX;
    let coordY = event.offsetY;
}


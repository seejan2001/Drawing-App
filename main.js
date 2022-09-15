let canvas = document.getElementById('canvas');
let color = document.getElementById('color');
let clear = document.getElementById('clear');
let stroke = document.getElementById('stroke');
let ctx;
var size = 10;
let color1 = color.value;

ctx = canvas.getContext('2d');
let x,y;    
let x2,y2;
let isPressed=false;


function drawCircle(x2,y2){
    ctx.beginPath();
    ctx.arc(x2,y2,size,0,Math.PI *2);
    ctx.fillStyle = 'color1';
    ctx.fill();
}
function drawLine(x, y, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color1;
    ctx.lineWidth = size ;
    ctx.stroke();
}

canvas.addEventListener('mousedown',(e)=>{
     x = e.offsetX;
     y = e.offsetY;
})

canvas.addEventListener('mousemove',(e)=>{
    if(!isPressed){
    x2 = e.offsetX;
    y2 = e.offsetY;
    drawCircle(x2,y2);
    drawLine(x,y,x2,y2);
  
    }
})
document.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

clear.addEventListener('click',()=>{ctx.clearRect(0,0,350,350)} );
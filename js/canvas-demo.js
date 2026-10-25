const canvas = document.getElementById("demo-canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "lightgray";
ctx.fillRect(20, 20, 100, 70);

ctx.beginPath();
ctx.arc(210, 55, 35, 0, Math.PI * 2);
ctx.stroke();

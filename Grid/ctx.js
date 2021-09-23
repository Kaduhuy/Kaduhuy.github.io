var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var gradient = ctx.createLinearGradient(0,0, c.width,0)
gradient.addColorStop(0,"lightgreen");
gradient.addColorStop(0.3,"lightblue");
gradient.addColorStop(0.5,"lightblue");
gradient.addColorStop(0.8,"lightpink");
gradient.addColorStop(1,"red");

//figur 1
ctx.moveTo(300,100);
ctx.lineTo(400,150);
ctx.lineTo(400,275);
ctx.lineTo(300,325);
ctx.lineTo(200,275);
ctx.lineTo(200,150);
ctx.lineTo(300,100);
ctx.stroke();

ctx.moveTo(200,275);
ctx.lineTo(100,325);
ctx.lineTo(100,450);
ctx.lineTo(200,500);
ctx.lineTo(300,450);
ctx.lineTo(300,325);
ctx.stroke()

ctx.moveTo(400,150);
ctx.lineTo(500,100);
ctx.lineTo(600,150);
ctx.lineTo(600,275);
ctx.lineTo(500,325);
ctx.lineTo(400,275);
ctx.stroke();

ctx.moveTo(600,275);
ctx.lineTo(700,325);
ctx.lineTo(700,450);
ctx.lineTo(600,500);
ctx.lineTo(500,450);
ctx.lineTo(500,325);
ctx.stroke();

ctx.moveTo(600,500);
ctx.lineTo(600,625);
ctx.lineTo(500,675);
ctx.lineTo(400,625);
ctx.lineTo(400,500);
ctx.lineTo(500,450);
ctx.stroke();

ctx.moveTo(400,625);
ctx.lineTo(300,675);
ctx.lineTo(200,625);
ctx.lineTo(200,500);
ctx.stroke();

ctx.moveTo(400,500);
ctx.lineTo(300,450);
ctx.stroke();

//figur 2
ctx.beginPath();
ctx.moveTo(1000,100);
ctx.lineTo(1100,150);
ctx.lineTo(1100,275);
ctx.lineTo(1000,325);
ctx.lineTo(900,275);
ctx.lineTo(900,150);
ctx.closePath();

ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.moveTo(1202,100);
ctx.lineTo(1302,150);
ctx.lineTo(1302,275);
ctx.lineTo(1202,325);
ctx.lineTo(1102,275);
ctx.lineTo(1102,150);
ctx.closePath();

ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.moveTo(1101,277);
ctx.lineTo(1201,327);
ctx.lineTo(1201,452);
ctx.lineTo(1101,502);
ctx.lineTo(1001,452);
ctx.lineTo(1001,327);
ctx.closePath();

ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.moveTo(1303,277);
ctx.lineTo(1403,327);
ctx.lineTo(1403,452);
ctx.lineTo(1303,502);
ctx.lineTo(1203,452);
ctx.lineTo(1203,327);
ctx.closePath();

ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.moveTo(899,277);
ctx.lineTo(999,327);
ctx.lineTo(999,452);
ctx.lineTo(899,502);
ctx.lineTo(799,452);
ctx.lineTo(799,327);
ctx.closePath();

ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.moveTo(1000,454);
ctx.lineTo(1100,504);
ctx.lineTo(1100,629);
ctx.lineTo(1000,679);
ctx.lineTo(900,629);
ctx.lineTo(900,504);
ctx.closePath();

ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.moveTo(1202,454);
ctx.lineTo(1302,504);
ctx.lineTo(1302,629);
ctx.lineTo(1202,679);
ctx.lineTo(1102,629);
ctx.lineTo(1102,504);
ctx.closePath();

ctx.fillStyle = "black";
ctx.fill();

function loop (){
document.getElementById("loop").innerHTML += " <section class='loopbut'><a href='send.html' class='assbut'><div><img src='image/send.png' alt='send icon'></div><h2>ส่งงาน</h2></a></section>";
}

for (i=1;i<=5;i++){
loop()
}
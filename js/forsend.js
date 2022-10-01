

var uri_link = "https://drive.google.com/drive/folders/1xeVYUJALWLxLVezp_bkDRHtDF4WepCip?usp=sharing";


loop=(mhoo)=>{

document.getElementById("loop").innerHTML += " <section class='loopbut'><a href='"+uri_link+"' class='assbut'><div><img src='image/send.png' alt='send icon'></div><h2>ส่งงาน"+localStorage[mhoo]+"</h2></a></section>";
}

for (i=1;i<=localStorage.length-1;i++){
loop(i);
}

const Delete = document.getElementById("deletebtn");
const local = localStorage;
var uri_link = "https://drive.google.com/drive/folders/1xeVYUJALWLxLVezp_bkDRHtDF4WepCip?usp=sharing";

looppost=(key,value)=>{
        sessionStorage[key,value];
        document.getElementById("loop").innerHTML += " <section class='loopbut'><a href='"+uri_link+"' class='assbut'><div><img src='image/send.png' alt='send icon'></div><h2>ส่งงาน"+value+"</h2></a></section>";
}

loopremove=(key,value)=>{
        sessionStorage[key,value];
        document.getElementById("remove").innerHTML += '<input class="check" type="checkbox" id="'+key+'"><label>'+value+'</label>';
}


    for (const [key,value] of Object.entries(local)){
        if(`${key}`!="LIFF_STORE:1657437132-LVyE7X7o:context"){
            looppost(`${key}`,`${value}`);
            loopremove(`${key}`,`${value}`);
        }
        
    }




Delete.addEventListener('click',()=>{
    const input = document.getElementsByClassName("check");
    console.log(input.length);
    for(i=0;i<input.length;i++){
        if (input[i].checked){
            localStorage.removeItem(input[i].id);
        }
    }
    location.reload();
});




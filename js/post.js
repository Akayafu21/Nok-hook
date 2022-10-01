// liff initial
liff.init({liffId:'1657437132-LVyE7X7o'});

const submitbtn = document.getElementById('btnpost');


// alert(localStorage.length);

//post btn
submitbtn.addEventListener('click',()=>{
    var uri_link = "https://drive.google.com/drive/folders/1xeVYUJALWLxLVezp_bkDRHtDF4WepCip?usp=sharing";
    localStorage[localStorage.length] = document.getElementById("name").value;
    liff.sendMessages([
        {
            "type": "flex",
            "altText": "this is a flex message",
            "contents": {
              "type": "bubble",
              "direction": "ltr",
              "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "โพสต์งาน"+localStorage[localStorage.length],
                    "align": "center",
                    "contents": []
                  }
                ]
              },
              "footer": {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "uri",
                      "label": "ส่งงาน",
                      "uri": uri_link
                    },
                    "color": "#FFE6AEFF"
                  }
                ]
              }
            }
          }
    ]);
   
      alert('Message sent');

});







// function loop (name, link){
//   document.getElementById("loop").innerHTML += " <section class='loopbut'><a class='assbut' href=" +link+ "><div><img src='/public/image/send.png' alt='send icon'></div><h2>ส่งงาน "+name+"</h2></a></section>";
//   }
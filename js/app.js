// liff initial
liff.init({liffId:'1657437132-LVyE7X7o'});

// Post button
function main (){

  //show sending
  // try{
  //   for (i=1;i<=5;i++){
  //     loop("ค้าง","https://www.google.com")
  //   }
  // }catch(a){

  // }

document.getElementById("btnpost").onclick = function (){
    var uri_name = "https://sublime-scion-356119.web.app/send.html";
    var folder_name = document.getElementById("name").value;
    var uri_name = document.getElementById("link").value;
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
                    "text": "โพสต์งาน"+folder_name,
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
                      "uri": uri_name
                    },
                    "color": "#FFE6AEFF"
                  }
                ]
              }
            }
          }
    ]);
   
      alert('Message sent');
};


}


// function loop (name, link){
//   document.getElementById("loop").innerHTML += " <section class='loopbut'><a class='assbut' href=" +link+ "><div><img src='/public/image/send.png' alt='send icon'></div><h2>ส่งงาน "+name+"</h2></a></section>";
//   }
  

main();
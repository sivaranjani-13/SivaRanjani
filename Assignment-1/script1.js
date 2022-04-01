document.addEventListener("DOMContentLoaded",()=>{
    const ImageDataUrl=localStorage.getItem("presentimage");
    if(ImageDataUrl)
    {
    document.querySelector("#images").setAttribute("src",ImageDataUrl);
    }
    });
    let newObject = window.localStorage.getItem("myObject");
    var obj=JSON.parse(newObject); 
    for (var key in obj) { 
    if (obj.hasOwnProperty(key)) {
    var tag = document.createElement("p");
    tag.setAttribute("class","myPara") ;
      var text = document.createTextNode(key + " : " + obj[key]); 
      tag.appendChild(text); 
      var element = document.getElementById("task");
      element.appendChild(tag);
    }
    }
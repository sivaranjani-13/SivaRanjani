document.querySelector("#img").addEventListener("change",function(){
    const imgReader=new FileReader();  
    
    imgReader.addEventListener("load",function(){
    localStorage.setItem("presentimage", imgReader.result);
    }); 
    
    imgReader.readAsDataURL(this.files[0]);
    
    });
    document.querySelector("#json").addEventListener("change", function() {
      var myFile = document.getElementById("json").files[0];
      var fileReader = new FileReader();
      fileReader.onload = function(e) {
        var detail = e.target.result;
        var data = JSON.parse(detail); 
        window.localStorage.setItem("myObject", JSON.stringify(data));
      };
      fileReader.readAsText(myFile);
    });
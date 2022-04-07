function searchbooks () {
    let searchBox=document.querySelector('#search-box');
    let images=document.querySelectorAll('.image');
    var key=searchBox.value.toLowerCase();
    console.log(searchBox.value.toLowerCase());
    for(let i of images){
        var values=i.querySelector("h3").innerText.toLowerCase();
        if(values.indexOf(key)>=0)
            i.style["display"]="";
        else
            i.style["display"]="none";
    }

}

let searchBox=document.querySelector('#search-box');
let images=document.querySelectorAll('.container .image-container .image');

searchBox.oninput= () =>{
    image.forEach(hide => hide.style.display='none');
let value=searchBox.value;
image.forEach(filter =>{
    let title = filter.getAttribute('data-title');
    if(value==title){
        filter.style.display ='block';
    }
    if(searchBox.value == ''){
    filter.style.display ='block';
    }
});
};
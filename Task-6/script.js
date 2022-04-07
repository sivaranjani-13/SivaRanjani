const collapseItemHeader = document.querySelectorAll(".collapse-item-header")
for(let i of collapseItemHeader){
  i.addEventListener("click", () => {
    const currentlyActivecollapseItemHeader = document.querySelector(".collapse-item-header.active");
    if(currentlyActivecollapseItemHeader && currentlyActivecollapseItemHeader!==i){
        currentlyActivecollapseItemHeader.classList.toggle("active");
        currentlyActivecollapseItemHeader.nextElementSibling.style.maxHeight = 0;
    }

  i.classList.toggle("active");
  const collapseItemBody = i.nextElementSibling;
  if(i.classList.contains("active")) {
      collapseItemBody.style.maxHeight = collapseItemBody.scrollHeight + "px";
  }
  else{
    collapseItemBody.style.maxHeight=0;  
  }
});
}

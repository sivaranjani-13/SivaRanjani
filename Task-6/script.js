const collapseItemHeader = document.querySelectorAll(".collapse-item-header")

collapseItemHeader.forEach(collapseItemHeader => {
    collapseItemHeader.addEventListener("click", event => {
        const currentlyActivecollapseItemHeader = document.querySelector(".collapse-item-header.active");
        if(currentlyActivecollapseItemHeader && currentlyActivecollapseItemHeader!==collapseItemHeader){
            currentlyActivecollapseItemHeader.classList.toggle("active");
            currentlyActivecollapseItemHeader.nextElementSibling.style.maxHeight = 0;
        }

      collapseItemHeader.classList.toggle("active");
      const collapseItemBody = collapseItemHeader.nextElementSibling;
      if(collapseItemHeader.classList.contains("active")) {
          collapseItemBody.style.maxHeight = collapseItemBody.scrollHeight + "px";
      }
      else{
        collapseItemBody.style.maxHeight=0;  
      }
    });
});


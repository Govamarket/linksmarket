const displayBtn = document.querySelector("#displayBtn");
let shopList = document.querySelector(".lists");
let deleteItem = document.querySelector("delete");
let selectItem = document.querySelector("#item");
const parentChild = document.querySelector(".parent-child");
const appendChild = document.querySelector(".append-child");

displayBtn.addEventListener("click", () => {
  if (selectItem.value.trim() == "") {
    displayBtn.style.background = "red";
  } else if (!selectItem.value.trim() == "") {
    displayBtn.style.background = "blue";
    selectItem.classList.add(".lists");
    parentChild.style.visibility = "visible";
  }else{
    let allSlect = (selectItem + appendChild + shopList);
    
  }
});

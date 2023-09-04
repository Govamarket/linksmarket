const displayBtn = document.querySelector("#displayBtn");
let shopList = document.querySelector(".lists");
let deleteItem = document.querySelector("delete");
let selectItem = document.querySelector("#item");
const parentChild = document.querySelector(".parent-child");
let listType = "";

const displayBt = () => {
  if (selectItem.value.trim() == "") {
    displayBtn.style.background = "red";
  } else if (selectItem.value.trim() !== "") {
    displayBtn.style.background = "blue";
    selectItem.classList.add(".lists");
    listType = (selectItem.value && +shopList + deleteItem);
    shopList.style.visibility = "visible";
    parentChild.style.visibility = "visible";
    listType.style.visibility = "visible";
  } else {
    
  }
};

displayBtn.addEventListener("click", () => {
  displayBt();
});

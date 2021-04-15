const menu = document.querySelectorAll(".menu ul li a");

menu.forEach(item => {
  item.addEventListener("click", scrolToId )

})


function scrolToId(event){
event.preventDefault();

const element = event.target;
const id = element.getAttribute("href");
const to = document.querySelector(id).offsetTop;
window.scroll({

  top: to,
  behavior:"smooth"
})


}
let buttonMenu = document.getElementById("reducedMenu")
const menuList = document.getElementById("menuList")

buttonMenu.addEventListener("click", function(){
    menuList.classList.toggle("ativa")
})
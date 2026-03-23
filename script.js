let buttonMenu = document.getElementById("reducedMenu")
const menuList = document.getElementById("menuList")

buttonMenu.addEventListener("click", function(){
    menuList.classList.toggle("ativa")
})


const projBox = document.querySelectorAll('.projBox')
const projDiv = document.querySelector('#sobreProjetos div')


projBox.forEach(projDiv => {
    projDiv.addEventListener('click', function(){
        console.log('projBox clicado', projDiv.id)
    })
})
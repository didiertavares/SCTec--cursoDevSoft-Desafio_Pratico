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
        projDiv.classList.toggle('visible')
        projDiv.innerHTML = "teste injeção"
    })
})

const popupContent = document.createElement('div')
popupContent.style.background = 'rgb(11, 29, 1)'
popupContent.style.border = '3px solid rgb(131, 197, 190)'
popupContent.style.borderRadius = '20px'
popupContent.style.padding = '20px'
popupContent.style.maxWidth = '400px'
popupContent.style.position = 'relative'

const content = projDiv.id  // interrompido na pesquisa por falta de tempo
                            // preciso entregar desse jeito, incompleto
popupContent.appendChild(content)


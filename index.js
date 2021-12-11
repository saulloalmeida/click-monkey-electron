const openFace = document.querySelector('.open')
const closedFace = document.querySelector('.closed')

//add event listener
openFace.addEventListener('click', ()=>{
    if(closedFace.classList.contains('closed')){
        closedFace.classList.add('active')
        openFace.classList.remove('active')
    }
})

closedFace.addEventListener('click', ()=>{
    if(openFace.classList.contains('open')){
        openFace.classList.add('active')
        closedFace.classList.remove('active')
    }
})
const rightBtn = document.querySelector('#add-item')
const lightbox= document.querySelector('.lightbox')
const lbContainer =document.querySelector('.lightbox-container')
const icon = document.querySelector('#icon')

rightBtn.addEventListener('click',exitLightbox)

// lightbox.addEventListener('click',exitLightbox)


function exitLightbox(){
    let posClick = event.target;
    if (posClick.classList.contains('bi-x-square-fill')){
        lightbox.style.display='none'
        icon.classList.remove('bi-x-square-fill')
        icon.classList.add('bi-plus-square-fill')
    }else if(posClick.classList.contains('bi-plus-square-fill')){
        lightbox.style.display='flex'
        icon.classList.remove('bi-plus-square-fill')
        icon.classList.add('bi-x-square-fill')
    }
}


const menuIND=document.querySelector('.nav-cont')
menuIND.addEventListener('mouseover',()=>{
    menuIND.classList.add('open')
    document.querySelector('body').classList.add('menuHover')
})
menuIND.addEventListener('mouseleave',()=>{
    menuIND.classList.remove('open')
    document.querySelector('body').classList.remove('menuHover')

})
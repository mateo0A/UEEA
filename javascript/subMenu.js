let btnSubM=document.querySelectorAll('.link-sty_show')
const menuIND=document.querySelector('.nav-cont')

btnSubM.forEach(function(element) {
    element.addEventListener('click', function() {
        let nextElement = this.nextElementSibling;
        let chev = this.querySelector('.bi-chevron-right');
        
        if(nextElement.clientHeight===0){
            nextElement.classList.add('open')
            chev.classList.add('down')
        }else{
            nextElement.classList.remove('open')
            chev.classList.remove('down')

        }
    })
});

menuIND.addEventListener('mouseover',()=>{
    menuIND.classList.add('open')
    document.querySelector('body').classList.add('menuHover')
})
menuIND.addEventListener('mouseleave',()=>{
    menuIND.classList.remove('open')
    document.querySelector('body').classList.remove('menuHover')
    btnSubM.forEach(function(element) {

            let nextElement = element.nextElementSibling;
            let chev = element.querySelector('.bi-chevron-right');
            
            nextElement.classList.remove('open')
            chev.classList.remove('down')
            
        });
})
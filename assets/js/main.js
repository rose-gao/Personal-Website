/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== SKILLS TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('skills__active')
        })
        target.classList.add('skills__active')

        tabs.forEach(tab =>{
            tab.classList.remove('skills__active')
        })
        tab.classList.add('skills__active')

    })

})

/*==================== HOBBIES MODAL ====================*/
const modalViews = document.querySelectorAll('.hobbies__modal'),
      modalBtns = document.querySelectorAll('.hobbies__button'),
      modalCloses = document.querySelectorAll('.hobbies__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
 const sections = document.querySelectorAll('section[id]')

 function scrollActive(){
     const scrollY = window.pageYOffset

     sections.forEach(current =>{
         const sectionHeight = current.offsetHeight
         const sectionTop = current.offsetTop - 50;
         sectionId = current.getAttribute('id')

         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
         }else{
             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
         }
     })
 }
 window.addEventListener('scroll', scrollActive)

 /*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

 /*===== SCROLL REVEAL ANIMATION =====*/
//  const sr = ScrollReveal({
//      origin: 'top',
//      distance: '60px',
//      duration: 2000,
//      delay: 200,
//      reset: true
//  });

//  sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
//  sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
//  sr.reveal('.home__social-icon',{ interval: 200}); 
//  sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

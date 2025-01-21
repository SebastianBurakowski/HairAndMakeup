let aboutSection;
let sectionImg;
let sectionTitle;
let sectionText;
let heroSection;
let heroVideos;
let accordeon;
let accordeonBtns;
let accordeonElements;



const prepareDomElements = () => {

    //////// POBIERANIE ELEMENTÓW STRONY //////


    accordeon = document.querySelector('.acordeon')
    accordeonBtns = document.querySelectorAll('.acordeon-btn')
    accordeonElements = document.querySelectorAll('.acordeon-info')
    aboutSection = document.querySelector('.about')
    sectionImg = document.querySelector('.about__img')
    sectionTitle = document.querySelector('.about__heading')
    sectionText = document.querySelector('.about__text')
    heroSection = document.querySelector('.hero')
    heroVideos = document.querySelectorAll('.hero__video')

}
const windowHeight = window.innerHeight;
//FUNCTIONS

function ShowAccordeon(){
    if (this.nextElementSibling.classList.contains('activeAcordeon')) {
        this.nextElementSibling.classList.remove('activeAcordeon')
        this.querySelector('.acordeon-span').textContent = '+'
      
    } else {
        closeAllAccordion();
        this.nextElementSibling.classList.toggle('activeAcordeon')
        this.querySelector('.acordeon-span').textContent = '-'
        
    }
    
}


const closeAllAccordion = () => {
    accordeonElements.forEach(el => {
        el.classList.remove('activeAcordeon')
    })

    const accordeonBtns = document.querySelectorAll('.acordeon-btn');
    accordeonBtns.forEach(btn => {
        const span = btn.querySelector('.acordeon-span');
        span.textContent = '+'; 
    });

}

const handleShowAbout = () => {

    const aboutSectionTop = aboutSection.getBoundingClientRect().top;
    

    if(aboutSectionTop <= windowHeight * 0.6){
        sectionImg.classList.add('activeAnimation')
        sectionTitle.classList.add('activeAnimation')
        sectionText.classList.add('activeAnimation')
    } else {
        sectionImg.classList.remove('activeAnimation')
        sectionTitle.classList.remove('activeAnimation')
        sectionText.classList.remove('activeAnimation')
    }

    
}

const handleShowHero = () => {
    const heroSectionTop = heroSection.getBoundingClientRect().top;

    if(heroSectionTop <= windowHeight * 0.7){
        heroVideos.forEach(video => {
            video.classList.add('activeVideo')
        })
    } else {
        heroVideos.forEach(video => {
            video.classList.remove('activeVideo')
        })
    }
    
}


const prepareDomEvents = () => {

    ////////// WYWOŁANIE FUNKCJI ///////////////////
    window.addEventListener("scroll", handleShowAbout);
    window.addEventListener("scroll", handleShowHero);
    accordeonBtns.forEach(btn =>
        btn.addEventListener('click', ShowAccordeon.bind(btn))
    )

}

///// GŁOWNE WYWOŁANIE FUNKCJI /////

const main = () => {
    prepareDomElements()
    prepareDomEvents();

}

window.addEventListener('DOMContentLoaded', main)
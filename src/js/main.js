let aboutSection;
let sectionImg;
let sectionTitle;
let sectionText;


const prepareDomElements = () => {

    //////// POBIERANIE ELEMENTÓW STRONY //////


    aboutSection = document.querySelector('.about')
    sectionImg = document.querySelector('.about__img')
    sectionTitle = document.querySelector('.about__heading')
    sectionText = document.querySelector('.about__text')

}

//FUNCTIONS

const handleShowAbout = () => {

    const aboutSectionTop = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

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


const prepareDomEvents = () => {

    ////////// WYWOŁANIE FUNKCJI ///////////////////
    window.addEventListener("scroll", handleShowAbout);

}

///// GŁOWNE WYWOŁANIE FUNKCJI /////

const main = () => {
    prepareDomElements()
    prepareDomEvents();

}

window.addEventListener('DOMContentLoaded', main)
let aboutSection;
let sectionImg;
let sectionTitle;
let sectionText;
let heroSection;
let heroVideos;
let accordeon;
let accordeonBtns;
let accordeonElements;
let portfolioSection;
let portfolioTitle;
let reviewSection;
let reviewTitle;
let reviewImg;
let offerSection;
let offerTitle;
let navMobile;
let navMobileEl;
let burgerBtn;
let burgerBars;


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
    portfolioSection = document.querySelector('.portfolio')
    portfolioTitle = document.querySelector('.portfolio__title')
    reviewSection = document.querySelector('.review')
    reviewTitle = document.querySelector('.review__title--desktop')
    reviewImg = document.querySelector('.review__img')
    offerSection = document.querySelector('.offers__desktop')
    offerTitle = document.querySelector('.offers__title-desktop')
    navMobile = document.querySelector('.nav__mobile')
    burgerBtn = document.querySelector('.burger-btn')
    navMobileEl = document.querySelectorAll('.nav__item--mobile')
    burgerBars = document.querySelector('.burger-btn__bars')


}
const windowHeight = window.innerHeight;
//FUNCTIONS

const handleBurger = () => {
    burgerBtn.classList.toggle('burger-active')
    
}

const handleColorBurger = () => {
    const top = windowHeight + 60;

    if(scrollY >= top) {
        burgerBars.classList.add('black-bars-color')
    }else {
        burgerBars.classList.remove('black-bars-color')
    
}
}


const showNav = () => {
    navMobile.classList.toggle('navActive')
    
}

const handleCloseNavMobile = () => {
       
            navMobile.classList.remove('navActive')
    burgerBtn.classList.remove('burger-active')
        
    }
    


function ShowAccordeon() {
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


    if (aboutSectionTop <= windowHeight * 0.6) {
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

    if (heroSectionTop <= windowHeight * 0.7) {
        heroVideos.forEach(video => {
            video.classList.add('activeVideo')
        })
    } else {
        heroVideos.forEach(video => {
            video.classList.remove('activeVideo')
        })
    }

}


const handlePortfolio = () => {
    const portfolioSectionTop = portfolioSection.getBoundingClientRect().top;

    if (portfolioSectionTop <= windowHeight * 0.3) {
        portfolioTitle.classList.add('activeTitle')
        
        
    } else {
        portfolioTitle.classList.remove('activeTitle')
    }

}

const handleOffer = () => {
    const offerSectionTop = offerSection.getBoundingClientRect().top;

    if (offerSectionTop <= windowHeight * 0.4) {
        offerTitle.classList.add('activeOfferTitle')
       
    } else {
        offerTitle.classList.remove('activeOfferTitle')
    }

}

const handleReview = () => {
    const reviewSectionTop = reviewSection.getBoundingClientRect().top;

    if (reviewSectionTop <= windowHeight * 0.7) {
        reviewTitle.classList.add('activeReviewTitle')
        reviewImg.classList.add('activeReviewImg')
    } else {
        reviewTitle.classList.remove('activeReviewTitle')
        reviewImg.classList.remove('activeReviewImg')
    }


    if (reviewSectionTop <= windowHeight * 0.4) {
    
        reviewImg.classList.add('activeReviewImg')

    } else {
      
        reviewImg.classList.remove('activeReviewImg')
    }

}



const prepareDomEvents = () => {

    ////////// WYWOŁANIE FUNKCJI ///////////////////
    window.addEventListener("scroll", handleColorBurger);
    window.addEventListener("scroll", handleShowAbout);
    window.addEventListener("scroll", handleShowHero);
    accordeonBtns.forEach(btn =>
        btn.addEventListener('click', ShowAccordeon.bind(btn))
    )
    window.addEventListener("scroll", handlePortfolio);
    window.addEventListener("scroll", handleReview);
    window.addEventListener("scroll", handleOffer);
    navMobileEl.forEach(btn =>
        btn.addEventListener('click', handleCloseNavMobile)
    )
    burgerBtn.addEventListener("click", () => { handleBurger(); showNav(); })


}

///// GŁOWNE WYWOŁANIE FUNKCJI /////

const main = () => {
    prepareDomElements()
    prepareDomEvents();

}

window.addEventListener('DOMContentLoaded', main)
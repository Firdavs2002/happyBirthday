'use strict';
AOS.init({
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    offset: 0, // offset (in px) from the original trigger point
    delay: 500, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window
});

document.addEventListener('DOMContentLoaded', () => {
    const mainType = new Typed('.main-typed', {
        strings: ['С днём рождения,'],
        typeSpeed: 100,
        showCursor: false,
    });
    
    const typedHeader = new Typed('.typed-header', {
        strings: ['Нина !', 'Напарник =)'],
        typeSpeed: 100,
        backSpeed: 50,
        startDelay: 2600,
    });

    const viewportObserver = new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {
            const endText = new Typed('#end-text', {
                strings: ['Твой друг, Федя :)', 'Твой напарник, Федяу 😸'],
                typeSpeed: 100,
                backSpeed: 25,
                startDelay: 29600,
            });
            observer.unobserve(document.querySelector('#end-text'))
        }
    })
    viewportObserver.observe(document.querySelector('#end-text'))
});
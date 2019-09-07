window.onload = function() {
    anime.timeline({
        targets: '.welcome',
        easing: 'easeOutExpo',
    })
    .add({
        width: ['0vw', '100vw'],
        opacity: 1,
        duration: 1200,
    })
    .add({
        delay: 2700,
        translateX: '100vw',
        duration: 2000,
        complete: function(anime){
            document.querySelector('.parent-welcome').remove();
        },
    })

// Headings
    anime({
        targets: '.welcome--heading',
        delay: 400,
        opacity: 1,
        duration: 1800,
        translateY: ['-30px', '0px'],
        easing: 'easeOutExpo'
    })


    anime({
        targets: '.welcome--sub-heading',
        delay: 600,
        opacity: 1,
        duration: 1800,
        translateY: ['-30px', '0px'],
        easing: 'easeOutExpo'
    })
    anime({
        targets: '.welcome--loader',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 1800,
        delay: 1200,
    })
    anime({
        targets: '.welcome--loader-loader',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 2300,
        delay: 2000,
        width: ['0%', '100%']
    })
    anime({
        targets: '.header',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 2300,
        delay: 3700,
        width: ['0%', '100%']
    })
    anime({
        targets: '.header__title',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 3300,
        delay: 4300,
        translateX: ['-300px', '0']
    })
    anime({
        targets: '.header__text-box--main',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 2300,
        delay: 4600,
        lineHeight: ['0', '8.5rem']
    })
    anime({
        targets: '.header__text-box--sub',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 2300,
        delay: 5000,
        translateY: ['60px', '0']

    })
    anime({
        targets: '.btn--primary',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 2300,
        delay: 5400,
    })

}
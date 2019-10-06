import anime from './libs/anime.js'

const jsAnimeTest = document.querySelectorAll('.js-anime-timeline')
jsAnimeTest.forEach((elem) => {
	console.log(elem)
	let tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
        });

        tl.add({
            targets: 'section div',
            width: '100%',
            backgroundColor: 'rgb(255, 75, 75)',
            delay: anime.stagger(100) // increase delay by 100ms for each elements.
        })
        .add({
            targets: 'section div',
            width: '90%',
            backgroundColor: 'rgb(69, 77, 93)'
        })
        .add({
            targets: 'h1',
            top: '20%',
            opacity: 1,
            duration: 4000,
        }, '-=1600')

        var squash = anime({
            targets: 'section',
            scaleY: '2',
            scaleX: '2',
            translateX: '40%',
            rotate: '45deg',
            duration: 5000,

            autoplay: false,
        })

        document.querySelector('h1').addEventListener('mouseover', () => {
            squash.play();
        })

})

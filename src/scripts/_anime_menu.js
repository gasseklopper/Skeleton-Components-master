import anime from './libs/anime.js'

const jsAnimeTest = document.querySelectorAll('.js-anime-menu')
jsAnimeTest.forEach((elem) => {
	// 	console.log(elem)
	/** Inspired by coursetro.com **/

	// Refs
	const wrapCta = document.querySelector('#wrap-cta'),
		btnCta = document.querySelector('#cta'),
		content = document.querySelector('#content'),
		btnClose = document.querySelector('#close');


	// Anime.js Commons Values for SVG Morph
	const common = {
		targets: '.polymorph',
		easing: 'easeOutQuad',
		duration: 600,
		loop: false
	};


	// Show content
	btnCta.addEventListener('click', () => {
		// Elements apparence
		wrapCta.classList.remove('active');
		content.classList.add('active');

		// Morph SVG
		// anime({
		// 	...common,
		// 	points: [{
		// 		value: '120,70 215,10 205,80 80,105 0,90'
		// 	}],
		// });

		anime.timeline({
			easing: 'easeOutExpo',
		})
		.add({
			targets: '.polymorph',
			points: [{
				value: '120,70 215,10 205,80 80,105 0,90'
			}],
		})
		.add({
			targets: '.polymorph',
			points: [{
				value: '120,70 215,10 105,80 0,105 0,90'
			}],
			offset: '-=500',
		})
	});


	// Hide content
	btnClose.addEventListener('click', () => {
		// Elements apparence
		content.classList.remove('active');
		wrapCta.classList.add('active');

		// Morph SVG
		anime({
			...common,
			points: [{
				value: '0,10 215,10 215,110 110,110 0,110'
			}]
		});
	});

})
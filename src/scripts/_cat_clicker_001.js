

const cat = document.querySelectorAll('.js-cat_clicker_001__image')
console.log(cat)



cat.forEach((elem) => {
	elem.addEventListener("click", () => {
		const catCount = document.querySelector('.js-cat_clicker_001__image__count').innerHTML
  	console.log(catCount)
	})
})

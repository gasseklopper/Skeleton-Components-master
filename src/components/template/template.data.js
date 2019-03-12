//Array Test variables ----------------------------------------------------------------------------- //

// headers ------------------------------------------------------------------------------------ //

const render = (filePath, data) => require('rosid-handler-njk')(filePath, {
	localOverwrites: false,
	src: 'src/components',
	data
})

const button = render('src/components/button/button.njk', require('../button/button.data'))

module.exports = async () => ({
	grid: {
		column1: await button,
		column2: await button
	}
})

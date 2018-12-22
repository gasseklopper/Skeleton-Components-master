const es= document.querySelectorAll('.styleguide_color')

let rgbToHex = (col) => {
	if(col.charAt(0)=='r')
	{
		col=col.replace('rgb(','').replace(')','').split(',');
		var r=parseInt(col[0], 10).toString(16);
		var g=parseInt(col[1], 10).toString(16);
		var b=parseInt(col[2], 10).toString(16);
		r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
		var colHex='#'+r+g+b;
		return colHex;
	}
}

es.forEach((elem) => {
	const style = getComputedStyle(elem)
	const backgroundColor = style.backgroundColor
	console.log(backgroundColor) // rgb(0, 0, 0)
	const outputColorRGB = elem.querySelector('.styleguide_color__rgbtitle')
	outputColorRGB.innerHTML = outputColorRGB.innerHTML + backgroundColor
	var col=backgroundColor;
	const outputColorHEX = elem.querySelector('.styleguide_color__hextitle')
	outputColorHEX.innerHTML = outputColorHEX.innerHTML + rgbToHex(col)
});

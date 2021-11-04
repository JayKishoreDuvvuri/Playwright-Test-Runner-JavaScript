module.exports = {
	//Locators
	baseUrl: 'http://automationpractice.com/index.php',
	homePageImage: 'div#header_logo',
	headerLogo: '#header_logo',
	landingPageTitle: 'My Store',
	title: 'My Store',
	fadedShortSleeveTshirts:
		"(//a[contains(text(),'Faded Short Sleeve T-shirts')])[1]",
	blouse: "(//a[contains(text(),'Blouse')])[2]",
	printedDress: "(//a[contains(text(),'Printed Dress')])[1]",
	printedDressTwo: "(//a[contains(text(),'Printed Dress')])[2]",
	printedSummerDress:
		'#homefeatured > .first-in-line.last-line > div > div.right-block > h5 > a',
	printedSummerDressTwo: "(//a[contains(text(),'Printed Summer Dress')])[2]",
	printedChiffonDress:
		'#homefeatured > li.last-mobile-line > div > div.right-block > h5 > a',
	addToCartButton: '#add_to_cart > button:not([disabled])',
	elementText: 'Add to cart',
	successMessage: 'div.layer_cart_product.col-xs-12.col-md-6 > h2',
	cartAddedMessage: "//span[contains(text(),'There is 1 item in your cart.')]",
	closeBtn: 'span.cross',
	itemCount: 'div > a > span.ajax_cart_quantity.unvisible',
	priceCount: 'div > a > span.ajax_cart_total.unvisible',
	productCount: '1',
	colourBlack: '#color_11',
	colourOrange: '#color_13',
	colourBlue: '#color_14',
	colourYellow: '#color_16',
	imagePicture: '#bigpic',
	blackColourImageUpdated:
		'http://automationpractice.com/img/p/1/5/15-large_default.jpg',
	orangeColourImageUpdated:
		'http://automationpractice.com/img/p/1/4/14-large_default.jpg',
	blueColourImageUpdated:
		'http://automationpractice.com/img/p/1/3/13-large_default.jpg',
	yellowColourImageUpdated:
		'http://automationpractice.com/img/p/1/2/12-large_default.jpg',
	colourSelected: "//li[@class='selected']",
	itemSelected: 'color_pick',
	quantityWanted: '#quantity_wanted',
	numberOfItems: '5',
	cart: "//b[contains(text(),'Cart')]",
	totalPrice: "//td[@id='total_product']",
	totalProductPrice: '$144.90',
	productPrice: '#total_product',
	productPageTitle: 'Printed Summer Dress - My Store',
	productPageUrl:
		'http://automationpractice.com/index.php?id_product=5&controller=product',
	checkout:
		'#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a > span',
	dressTitle: "//h1[contains(text(),'Printed Summer Dress')]"
}

const {
	colourBlack,
	printedSummerDress,
	imagePicture,
	colourOrange,
	colourBlue,
	colourYellow,
	colourSelected,
	headerLogo,
	quantityWanted,
	numberOfItems,
	checkout,
	productPrice
} = require('../pageobjects/selectors')
const BasePage = require('./basePage')
const AddToCartPage = require('./addToCartPage')

class ProductPage extends BasePage {
	constructor(page) {
		super(page)
	}

	async printedSummerDress() {
		return await this.waitAndClick(printedSummerDress)
	}

	async verifyTitle() {
		return await this.getTitle({ visible: true })
	}

	async blackColour() {
		await this.waitAndClick(colourBlack)
		return this.blackColourResult()
	}

	async blackColourImageUpdated() {
		await this.isElementVisible(imagePicture)
		return await this.ColourImageUpdated()
	}

	async orangeColour() {
		await this.waitAndClick(colourOrange)
		return await this.orangeColourResult()
	}
	async orangeColourImageUpdated() {
		await this.isElementVisible(imagePicture)
		return await this.ColourImageUpdated()
	}

	async blueColour() {
		await this.waitAndClick(colourBlue)
		return await this.blueColourResult()
	}

	async blueColourImageUpdated() {
		await this.isElementVisible(imagePicture)
		return await this.ColourImageUpdated()
	}

	async yellowColour() {
		await this.waitAndClick(colourYellow)
		return await this.yellowColourResult()
	}

	async yellowColourImageUpdated() {
		await this.isElementVisible(imagePicture)
		return await this.ColourImageUpdated()
	}

	async colourSelected() {
		return await this.isElementVisible(colourSelected)
	}

	async navigateToHomePage() {
		await this.waitAndClick(headerLogo)
	}

	async addQuantity() {
		await this.waitAndType(quantityWanted, numberOfItems)
		await AddToCartPage.clickAddToCart()
		await AddToCartPage.cartSuccessMessage()
		await AddToCartPage.cartAddedMessage()
		return await this.waitAndClick(checkout)
	}

	async verifyTotalPrice() {
		const result = await this.getText(productPrice)
		return result
	}
}
module.exports = ProductPage

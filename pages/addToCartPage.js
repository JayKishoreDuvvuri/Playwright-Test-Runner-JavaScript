const BasePage = require('./basePage')
const {
	addToCartButton,
	successMessage,
	cartAddedMessage,
	closeBtn,
	itemCount,
	printedChiffonDress
} = require('../pageobjects/selectors')

class AddToCartPage extends BasePage {
	constructor(page) {
		super(page)
	}

	async printedChiffonDress() {
		await this.isElementVisible(printedChiffonDress)
	}

	async clickChiffonDress() {
		await this.waitAndClick(printedChiffonDress)
	}

	async clickAddToCart() {
		return await this.waitAndClick(addToCartButton)
	}

	async cartAddedMessage() {
		return await this.isElementVisible(cartAddedMessage)
	}

	async cartSuccessMessage() {
		return await this.isElementVisible(successMessage)
	}

	async cartCount() {
		await this.waitAndClick(closeBtn)
		return await this.getText(itemCount)
	}
}
module.exports = AddToCartPage

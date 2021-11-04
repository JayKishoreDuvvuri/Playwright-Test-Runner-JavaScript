const base = require('@playwright/test')
const LandingPage = require('../pages/landingPage')
const AddToCartPage = require('../pages/addToCartPage')
const ProductPage = require('../pages/productPage')

const test = base.test.extend({
	landingPage: async ({ page }, use) => {
		await use(new LandingPage(page))
	},
	addToCartPage: async ({ page }, use) => {
		await use(new AddToCartPage(page))
	},
	productPage: async ({ page }, use) => {
		await use(new ProductPage(page))
	}
})
module.exports = test

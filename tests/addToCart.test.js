const test = require('../testFixtures/fixture')
const { productCount } = require('../pageobjects/selectors')
const { expect } = require('@playwright/test')

// ### 1. Launch the Application
// ### 2. Select the Product
// ### 3. Add to Cart
// ### 4. Verify the message displayed that the product is added to Cart
// ### 5. Check the Product Count of the Cart

test('Add to Cart', async ({ landingPage, addToCartPage }) => {
	await test.step('Check the title and url on the Landing Page', async () => {
		await landingPage.open()
		await landingPage.getTitle()
		await landingPage.getUrl()
		await landingPage.waitForPageLoad()
	})

	await test.step('click on 20% discuont listed Item', async () => {
		await addToCartPage.printedChiffonDress()
		await addToCartPage.clickChiffonDress()
	})

	await test.step(
		'Check whether the Shopping Cart is enabled and click item to add to Cart',
		async () => {
			await addToCartPage.clickAddToCart()
		}
	)

	await test.step(
		'Verify whether the product added to Cart message is displayed',
		async () => {
			await addToCartPage.cartSuccessMessage()
			let isVisible = await addToCartPage.cartAddedMessage()
			expect(isVisible).toBeTruthy()
		}
	)

	await test.step('Verify the product count from the Cart', async () => {
		let getProductCount = await addToCartPage.cartCount()
		expect(getProductCount).toEqual(productCount)
	})
})

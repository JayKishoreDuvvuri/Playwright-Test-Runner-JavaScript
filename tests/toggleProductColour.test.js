const test = require('../testFixtures/fixture')
const { expect } = require('@playwright/test')
const {
	blackColourImageUpdated,
	blueColourImageUpdated,
	itemSelected,
	baseUrl,
	orangeColourImageUpdated,
	title,
	yellowColourImageUpdated
} = require('../pageobjects/selectors')

// ### 1. Launch the Application
// ### 2. Click on the 5th Product with 5% discount from the list
// ### 3. Toggle between the Colours for this selected product
// ### 4. Verify the image is updated when selecting different colours
// ### 5. Click the Logo at the top and Navigate to Landing Page

test.describe('Toggle between the colours of the Product', () => {
	test('Toggle Workflow Test', async ({ landingPage, productPage }) => {
		await test.step('Check the title and url on the Landing Page', async () => {
			await landingPage.open()
			await landingPage.getTitle()
			await landingPage.getUrl()
			await landingPage.waitForPageLoad()
			expect(await landingPage.getTitle()).toEqual(title)
			expect(await landingPage.getUrl()).toEqual(baseUrl)
		})

		await test.step(
			'Click on the 5th Product with 5% discount on the Landing Page',
			async () => {
				await productPage.printedSummerDress()
				await productPage.verifyTitle()
			}
		)

		await test.step(
			'Check when selecting black colour the image is updated',
			async () => {
				const result = await productPage.blackColour()
				expect(result).toContain(itemSelected)

				const isVisible = await productPage.colourSelected()
				expect(isVisible).toBeTruthy()

				const colourUpdated = await productPage.blackColourImageUpdated()
				expect(colourUpdated).toEqual(blackColourImageUpdated)
			}
		)

		await test.step(
			'Check when selecting orange colour the image is updated',
			async () => {
				const result = await productPage.orangeColour()
				expect(result).toContain(itemSelected)

				const isVisible = await productPage.colourSelected()
				expect(isVisible).toBeTruthy()

				const colourUpdated = await productPage.orangeColourImageUpdated()
				expect(colourUpdated).toEqual(orangeColourImageUpdated)
			}
		)

		await test.step(
			'Check when selecting blue colour the image is updated',
			async () => {
				const result = await productPage.blueColour()
				expect(result).toContain(itemSelected)

				const isVisible = await productPage.colourSelected()
				expect(isVisible).toBeTruthy()

				const colourUpdated = await productPage.blueColourImageUpdated()
				expect(colourUpdated).toEqual(blueColourImageUpdated)
			}
		)

		await test.step(
			'Check when selecting yellow colour the image is updated',
			async () => {
				const result = await productPage.yellowColour()
				expect(result).toContain(itemSelected)

				const isVisible = await productPage.colourSelected()
				expect(isVisible).toBeTruthy()

				const colourUpdated = await productPage.yellowColourImageUpdated()
				expect(colourUpdated).toEqual(yellowColourImageUpdated)
			}
		)

		await test.step('Navigate to Landing Page', async () => {
			await productPage.navigateToHomePage()
			expect(await productPage.getTitle()).toEqual(title)
			expect(await productPage.getUrl()).toEqual(baseUrl)
		})
	})
})

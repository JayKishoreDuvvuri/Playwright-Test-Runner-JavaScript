const test = require('../testFixtures/fixture')

// ### 1. Launch the Application
// ### 2. Arrive on the Landing Page
// ### 3. Verify the product names are visible
// ### 4. Print the Name of Products in to the Test Reort

test.describe('Validate Product Names', () => {
	test('Check Product Names Visible and Print it to Test Report', async ({
		landingPage
	}) => {
		await test.step(
			'Open the App to check the title and url on the Landing Page',
			async () => {
				await landingPage.open()
				await landingPage.getTitle()
				await landingPage.getUrl()
				await landingPage.waitForPageLoad()
			}
		)

		await test.step(
			'Check the product name: Faded Short Sleeve T-shirts is visible',
			async () => {
				await landingPage.fadedShortSleeveTshirts()
			}
		)

		await test.step('Check the product name: Blouse is visible', async () => {
			await landingPage.blouse()
		})

		await test.step(
			'Check the product name: Printed Dress is visible',
			async () => {
				await landingPage.printedDress()
			}
		)

		await test.step(
			'Check the product name: Printed Dress Two is visible',
			async () => {
				await landingPage.printedDressTwo()
			}
		)

		await test.step(
			'Check the product name: Printed Summer Dress is visible',
			async () => {
				await landingPage.printedSummerDress()
			}
		)

		test.step(
			'Check the product name: Printed Summer Dress Two is visible',
			async () => {
				await landingPage.printedSummerDressTwo()
			}
		)

		test.step(
			'Check the product name: Printed Chiffon Dress is visible',
			async () => {
				await landingPage.printedChiffonDress()
			}
		)
	})
})

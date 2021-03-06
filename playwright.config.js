const { devices } = require('@playwright/test')

module.exports = {
	testDir: 'tests',
	timeout: 30000,
	retries: 1,
	reporter: 'list',
	projects: [
		{
			name: `Chrome`,
			use: {
				browserName: `chromium`,
				channel: `chrome`,
				headless: true,
				viewport: { width: 1720, height: 850 },
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`
			}
		},
		{
			name: `Firefox`,
			use: {
				browserName: `firefox`,
				headless: true,
				viewport: { width: 1720, height: 850 },
				ignoreHTTPSErrors: true,
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`,
				launchOptions: {
					slowMo: 200
				}
			}
		},
		{
			name: `WebKit`,
			use: {
				browserName: `webkit`,
				headless: true,
				viewport: { width: 1720, height: 850 },
				ignoreHTTPSErrors: true,
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`
			}
		},
		{
			name: `Android`,
			use: {
				...devices[`Pixel 5`],
				browserName: `chromium`,
				headless: true,
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`
			}
		},
		{
			name: `iOS`,
			use: {
				...devices[`iPhone 12`],
				browserName: `webkit`,
				headless: true,
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`
			}
		},
		{
			name: `Edge`,
			use: {
				browserName: `chromium`,
				channel: `msedge`,
				headless: true,
				viewport: { width: 1720, height: 850 },
				ignoreHTTPSErrors: true,
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`,
				launchOptions: {
					slowMo: 100
				}
			}
		}
	]
}

### Playwright Test Runner JavaScript 
 
Design Page Objects and run Tests with JavaScript
 
### Run application

Clone the repository 
```bash
git clone https://github.com/JayKishoreDuvvuri/Playwright-Test-Runner-JavaScript.git 
```
  
Install dependencies
```bash   

npm install
npx playwright install
```

Run test
```bash
npm run test - For all browsers including Android and iOS tests
npm run test:chrome - For tests only on chrome browser
npm run test:mobile - For running mobile emulation tests on android and iOS
```

Folder Structure
 
    ├── ...
    │
    ├── pages                               # Generic functionality for tests
    │   |
    │   ├── basePage.js                     # Base page testing functionality
    │   ├── landingPage.js                  # Landing page testing functionality
    │   ├── addToCartPage.js                # Add To Cart page testing functionality
    │   ├── productPage.js                  # Product page testing functionality
    │
    ├── tests                               # Test suite
    │    ├── addToCart.test.js              # Automated Test Script     
    │    ├── productNames.test.js           # Automated Test Script
    │    ├── toggleProductColour.test.js    # Automated Test Script
    │
    │
    ├── pageobjects                       
    │    ├──selectors.js                    # HTML and CSS identifier for elements to test
    │               
    │
    └─── html-test-report                   # Playwright html test report for the tests executed
                    


### Playwright Test Report
```bash
Html-test-report : npm run html-report
```

### Bitbucket
```bash
Repo: https://bitbucket.org/jaykishore96/test-automation-playwright/src/ui-test/
Pipelines: https://bitbucket.org/jaykishore96/test-automation-playwright/pipelines/results/page/1
```

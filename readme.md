# Running Tests in TestCafe

1. After you clone this repo, download and install `node` with `npm`

1. Then, cd into the repo and run `npm install`

1. As long as you have a browser installed on your machine, you can run this test suite with one of the following commands:

- `npm run chrome-tests`
- `npm run firefox-tests`
- `npm run safari-tests` 

1. There are additional test run commands (for other browsers) that are included in the package.json in the `scripts` property.

- TestCafe's webdriver will automatically detect the specified browser driver on your machine (no need to manually download and install a separate browser driver!)

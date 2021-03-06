require('../index');

import AuthenticationPage from '../pages/authentication-page';
import CreatAccountPage from '../pages/create-account-page';

fixture `Create an Account fixture`
    .page ('http://automationpractice.com/index.php?controller=authentication&back=my-account');

const authenticationPage = new AuthenticationPage();
const firstname = 'New';
const lastname = 'TCuser';
const randomString = Math.random().toString(36).substr(2, 5);
const email1 = 'tcnew1_' + randomString + '@email.com';
const email2 = 'tcnew2_' + randomString + '@email.com';
const password = process.env.VALID_USER_PASSWORD;
const address = process.env.ADDRESS;
const city = process.env.VALID_USER_PASSWORD;
const state = process.env.STATE;
const zip = process.env.ZIP;
const mobile = process.env.MOBILE;


test('Create an account with only the required fields', async t => {
    await authenticationPage.createAccountStepOne(email1);
    
    const createAccountPage = new CreatAccountPage();
    await t.expect(createAccountPage.emailInput.value).eql(email1, 'Email address is incorrect!');
    await t.expect(createAccountPage.addressAliasInput.value).eql('My address', 'Address is incorrect!');
    await createAccountPage.registerAccount(firstname, lastname, password, address, city, state, zip, mobile);

    const myAccountRedirect = await t.eval(() => window.location);
    await t.expect(myAccountRedirect.search).eql('?controller=my-account', 'Account page is not displayed!');
});

test('Create new account without entering data', async t => {
    await authenticationPage.createAccountStepOne(email2);

    const createAccountPage = new CreatAccountPage();
    await createAccountPage.registerButton.click;
    await t.expect(createAccountPage.validationMessage.textContent).contains('You must register at least one phone number.', 'Phone validation message is not displayed!');
});
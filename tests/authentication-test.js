require('../index');

import AuthenticationPage from '../pages/authentication-page';

fixture `Authentication fixture`
    .page ('http://automationpractice.com/index.php?controller=authentication&back=my-account');

const authenticationPage = new AuthenticationPage();
const userEmail = process.env.VALID_USER_EMAIL;
const validPassword = process.env.VALID_USER_PASSWORD;
const invalidPassword = '12345'
const randomString = Math.random().toString(36).substr(2, 5);
const newAccountEmail = 'tcnew_' + randomString + '@email.com'

test('Sign in with valid credentials', async t => {
    await authenticationPage.signIn(userEmail, validPassword);
    const myAccountRedirect = await t.eval(() => window.location);
    await t.expect(myAccountRedirect.search).eql('?controller=my-account', 'Account page is not displayed!');
});

test('Sign in with invalid credentials', async t => {
    await authenticationPage.signIn(userEmail, invalidPassword);
    await t.expect(authenticationPage.authenticationFailedErrorMessage.textContent).contains('Authentication failed', 'Authentication failed message is not displayed!')
});

test('Enter email address to create an account', async t=>{
    await authenticationPage.createAccountStepOne(newAccountEmail);
    const createAccountRedirect = await t.eval(() => window.location);
    await t.expect(createAccountRedirect.search).eql('?controller=authentication&back=my-account', 'Create an Account page is not displayed!');
});

test('Create new account with email that is already in use', async t => {
    await authenticationPage.createAccountStepOne(userEmail);
    await t.expect(authenticationPage.createAccountErrorMessage.textContent).contains('An account using this email address has already been registered', 'Create account error message is not displayed!');
});
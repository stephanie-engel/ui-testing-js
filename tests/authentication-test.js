import AuthenticationPage from '../pages/authentication-page';

fixture `Authentication fixture`
    .page ('http://automationpractice.com/index.php?controller=authentication&back=my-account');

const authenticationPage = new AuthenticationPage();
const userEmail = 'testcafeuser@email.com'
const validPassword = 'spx3mc5QigvgZdf'
const invalidPassword = '12345'
const randomString = Math.random().toString(36).substr(2, 5);
const newAccountEmail = 'testcafenew' + randomString + '@email.com'

test('Sign in with valid credentials', async t => {
    await authenticationPage.signIn(userEmail, validPassword);
    await t.wait(5000)
    const myAccountRedirect = await t.eval(() => window.location);
    await t.expect(myAccountRedirect.search).eql('?controller=my-account', 'Account page is not displayed!');
});

test('Sign in with invalid credentials', async t => {
    await authenticationPage.signIn(userEmail, invalidPassword);
    await t.expect(authenticationPage.validationMessage.textContent).contains('Authentication failed', 'Validation message is not displayed!')
});

test('Enter email address to create an account', async t=>{
    await authenticationPage.createAccountStepOne(newAccountEmail);
    const createAccountRedirect = await t.eval(() => window.location);
    await t.expect(createAccountRedirect.search).eql('?controller=authentication&back=my-account', 'Create an Account page is not displayed!');
})
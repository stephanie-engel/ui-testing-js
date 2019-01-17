import { Selector, t } from 'testcafe';

export default class AuthenticationPage {
    constructor() {
        this.alreadyRegisteredEmailInput = Selector('#email')
        this.passwordInput = Selector('#passwd');
        this.signInButton = Selector('#SubmitLogin');
        this.validationMessage = Selector('#center_column > div.alert.alert-danger');
        this.createAccountEmailInput = Selector('#email_create')
        this.createAccountButton = Selector('#SubmitCreate > span')
    }
    async signIn(email, password) {
        await t
            .typeText(this.alreadyRegisteredEmailInput, email)
            .typeText(this.passwordInput, password)
            .click(this.signInButton);
    }
    async createAccountStepOne(email) {
        await t
            .typeText(this.createAccountEmailInput, email)
            .click(this.createAccountButton);
    }
}
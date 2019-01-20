import { Selector, t } from 'testcafe';

export default class CreatAnAccountPage {
    constructor() {
        this.mrRadio = Selector('#id_gender1');
        this.msRadio = Selector('#id_gender2');
        this.firstNamePersonalInfoInput = Selector('#customer_firstname');
        this.lastNamePersonalInfoInput = Selector('#customer_lastname');
        this.emailInput = Selector('#email');
        this.passwordInput = Selector('#passwd');
        this.dobDaySelect = Selector('#days');
        this.dobMonthSelect = Selector('#months');
        this.dobYearSelect = Selector('#years');
        this.signUpNewsletterChk = Selector('#newsletter');
        this.receiveOffersChk = Selector('#optin');

        this.firstNameYourAddressInput = Selector('#firstname');
        this.lastNameYourAddressInput = Selector('#lastname');
        this.companyInput = Selector('##company');
        this.addressOneInput = Selector('#address1');
        // this.emailInput = Selector('#email');
        // this.passwordInput = Selector('#passwd');
        // this.dobDaySelect = Selector('#days');
        // this.dobMonthSelect = Selector('#months');
        // this.dobYearSelect = Selector('#years');
        // this.signUpNewsletterChk = Selector('#newsletter');
        // this.receiveOffersChk = Selector('#optin');
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
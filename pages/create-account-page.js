import { Selector, t } from 'testcafe';

export default class CreatAccountPage {
    constructor() {
        this.validationMessage = Selector('#center_column > div');
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
        this.addressTwoInput = Selector('#address2');
        this.cityInput = Selector('#city');
        this.stateSelect = Selector('#id_state');
        this.stateOption = Selector('#id_state').find('option');
        this.zipInput = Selector('#postcode');
        this.countrySelect = Selector('#id_country');
        this.additionalInfoInput = Selector('#other');
        this.homePhoneInput = Selector('#phone');
        this.mobilePhoneInput = Selector('#phone_mobile');
        this.addressAliasInput = Selector('#alias');
        this.registerButton = Selector('#submitAccount > span');
    }
    async registerAccount(firstname, lastname, password, address, city, state, zip, mobile) {
        await t
            .typeText(this.firstNamePersonalInfoInput, firstname)
            .typeText(this.lastNamePersonalInfoInput, lastname)
            .typeText(this.passwordInput, password)
            .typeText(this.firstNameYourAddressInput, firstname)
            .typeText(this.lastNameYourAddressInput, lastname)
            .typeText(this.addressOneInput, address)
            .typeText(this.cityInput, city)
            .click(this.stateSelect)
            .click(this.stateOption.withText(state))
            .typeText(this.zipInput, zip)
            .typeText(this.mobilePhoneInput, mobile)
            .click(this.registerButton);
    }
}
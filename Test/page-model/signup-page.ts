import { Selector, t } from 'testcafe';
import { Account, NextStepAccount } from './account-page';

class SignUpPage {
    firstName: Selector = Selector('#FreshdeskUser_first_name');
    lastName: Selector = Selector('#FreshdeskUser_last_name');
    emailInput: Selector = Selector('#FreshdeskUser_email_SG');
    pass: Selector = Selector('#FreshdeskUser_new_password');
    rePass: Selector = Selector('#FreshdeskUser_new_password_repeat');
    showPass: Selector = Selector('.btn-show-password');
    title: Selector = Selector('#FreshdeskUser_title');
    company: Selector = Selector('#FreshdeskUser_company');
    countrySeclect: Selector = Selector('#country.form-control');
    countryState: Selector = Selector('#state.form-control');
    phoneInput: Selector = Selector('#FreshdeskUser_phone');
    submitSignUpBtn: Selector = Selector('#signup-btn');

    async inputName(account: Account) {
        await t
            .click(this.firstName)
            .typeText(this.firstName, account.firstName)
            .click(this.lastName)
            .typeText(this.lastName, account.lastName)
            .click(this.emailInput)
            .typeText(this.emailInput, account.emailInput)
            .click(this.pass)
            .typeText(this.pass, account.pass)
            .click(this.showPass)
            .click(this.rePass)
            .typeText(this.rePass, account.rePass )
            .click(this.showPass)
            .click(this.submitSignUpBtn);
    }
    async createAccount(accountNextStep: NextStepAccount) {
        await t
            .click(this.title)
            .typeText(this.title, accountNextStep.title)
            .click(this.company)
            .typeText(this.company, accountNextStep.company)
            .click(this.countrySeclect)
            .click(this.countrySeclect.find('option').withText(accountNextStep.countrySeclect))
            .click(this.countryState)
            .click(this.countryState.find('option').withText(accountNextStep.countryState))
            .click(this.phoneInput)
            .typeText(this.phoneInput, accountNextStep.phone)
            .click(this.submitSignUpBtn);
    }

    async checkSignUp (){

    }
}
export default new SignUpPage();

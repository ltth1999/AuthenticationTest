import { Selector, t } from 'testcafe';
import { Account } from './account-page';

class SignInPage {
    email: Selector = Selector('#lg-email');
    pass: Selector = Selector('#lg-password');
    showPass: Selector = Selector('.btn-show-password');
    submitLoginBtn: Selector = Selector('#login-btn');

    checkByText(warningText: string): Selector {
        return  Selector('#activation_warning').find('p').withText(warningText);
    }
    async accountInfo(account: Account) {
        await t
            .click(this.email)
            .typeText(this.email, account.emailInput)
            .click(this.pass)
            .typeText(this.pass, account.pass)
            .click(this.showPass)
            .click(this.submitLoginBtn)       
    }
    async checkSignIn(warningText : string){
        await t.click(this.checkByText(warningText));
    }
}
export default new SignInPage();
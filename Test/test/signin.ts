import signinpage from '../page-model/signin-page';
import { Account } from '../page-model/account-page';

fixture`TestCafe`
    .page('https://sso-stage1.logigear.com/?host_url=https://stage1.gondolatest.com/en/');

test('Test Sign In ', async t => {
        await t
            .maximizeWindow();
        await signinpage.accountInfo(new Account('john.smithh@gmail.com', 'Abc@1234'));
        await signinpage.checkSignIn('Click the link to activate your account.');
});

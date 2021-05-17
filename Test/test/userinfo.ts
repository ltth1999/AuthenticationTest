import userinfopage from '../page-model/userinfo-page';
import signinpage from '../page-model/signin-page';
import { Account } from '../page-model/account-page';

fixture`TestCafe`
    .page('https://sso-stage1.logigear.com/?host_url=https://stage1.gondolatest.com/en/');

test('Manage User ', async t => {
        await t
            .maximizeWindow();
        await signinpage.accountInfo(new Account('john.smithh@gmail.com', 'Abc@1234'));
        await userinfopage.manageUser('John Smith', 'Manage My Profile');
});

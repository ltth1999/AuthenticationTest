import signuppage from '../page-model/signup-page';
import { Account , NextStepAccount } from '../page-model/account-page';
fixture`TestCafe`
    .page('https://sso-stage1.logigear.com/register/?host_url=https://stage1.gondolatest.com/en/thankyou/');

test('Test Sign Up ', async t => {
    await t
        .maximizeWindow();
        await signuppage.inputName(new Account('john.smithhh@gmail.com' , 'Abc@1234', 'John', 'Smith', 'Abc@1234'));
        await signuppage.createAccount(new NextStepAccount('Test', 'LogiGear', 'Vietnam','Tra Vinh','92828384743'))
   
});
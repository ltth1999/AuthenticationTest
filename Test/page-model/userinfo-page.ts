import { Selector, t } from 'testcafe';

class UserInfo {
    registerTitle : Selector = Selector('#register-title');
    getMenuByText(menuItem: string): Selector {
        return Selector('.account-menu.dropdown').nth(1).find('a').withText(menuItem);
    }
    getDropDownByText(dropdownItem: string): Selector {
        return Selector('.menu-update-profile').nth(1).find('a').withText(dropdownItem);
    }
    async manageUser(menuText: string, dropdownText: string) {
        await t.click(this.getMenuByText(menuText));
        await t.click(this.getDropDownByText(dropdownText));
        await t.click(this.registerTitle);
    }
}
export default new UserInfo();
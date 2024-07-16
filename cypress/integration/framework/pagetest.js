import login_po from "../../support/pageObjects/orangehrm/loginPage";
import Link_po from "../../support/pageObjects/orangehrm/link_po";
import Logout_po from "../../support/pageObjects/orangehrm/logout_po";
import login_po from "../../support/pageObjects/orangehrm/loginPage";

describe('', () => {

    const login_po= new Login_po();
    const link_po= new Link_po();
    const logout_po= new Logout_po();

    it('', () => {
        
        login_po.EnterURL();
        login_po.Login();

        link_po.linkclick('Admin');
        logout_po.logout();

    });
});
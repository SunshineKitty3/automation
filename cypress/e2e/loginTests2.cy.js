describe("Login Tests" ,()=>{
    it("visit goit login page" , ()=>{
        cy.visit("https://www.edu.goit.global/account/login");
        cy.get("#user_email").type("testowyqa@qa.team")
        cy.get("input[type='password']").type("QA!automation-1")
        cy.get("button[type='submit']").click();
        cy.get("button[data-element-type='burger-menu']").click()
        cy.get("#open-navigation-menu-mobile").click()

    })
})
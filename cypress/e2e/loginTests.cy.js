describe("Login Tests" , ()=>{
    it("visit goit login page" , ()=>{
        cy. visit("https://www.edu.goit.global/account/login");
        cy.get("#user_email").type("user888@gmail.com")
        cy.get("input[type='password']").type("1234567890")
        cy.get("button[type='submit']").click();
        cy.get("button[data-element-type='burger-menu']").click(
        cy.get("#open-navigation-menu-mobile").click(
        ) 
        )
    

    })
})
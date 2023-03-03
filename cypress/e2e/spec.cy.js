describe('Lost Password', () =>{
  const serverId = 'fai27wux';
  const serverDomain = 'fai27wux.mailosaur.net';
  const emailAddress = 'solar-pleasure@fai27wux.mailosaur.net';
  
  
  it('reset password', () => {
      cy.visit('https://www.top-office.com/customer/account/forgotpassword/');
      cy.get('#CybotCookiebotDialogBodyButtonDecline').click();
      
      cy.get('#email_address').type(emailAddress);

      cy.get('.btn-email-pwd > .cta').click();
      

     
  })
  let passwordResetLink;
  it('Gets Password Reset email from Mailosaur', () =>{
    cy.mailosaurGetMessage(serverId, {
      sentTo: emailAddress
    }).then(email => {
      expect(email.subject).to.equal('Rappel de vos identifiants sur Top-Office.com');
      passwordResetLink = email.html.links[1].text
    })
    console.log(passwordResetLink)
  })

  it('Follows the link form the email', () => {
    const validPassword = 'Mahani2013';

    cy.visit(passwordResetLink);
    cy.get('#passwordmain').type(validPassword);
    cy.get('#CybotCookiebotDialogBodyButtonDecline').click();
    cy.get('#confirmation').type(validPassword);

    cy.get('.btn-email-pwd > .cta').click();
  })
})
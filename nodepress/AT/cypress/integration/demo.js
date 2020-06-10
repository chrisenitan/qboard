context('Actions', () => {
    
  it('Logs in to a job', () => {

    cy.visit('https://chrisnny.gotphoto.com.staging.getphoto.io/prepay/')

    cy.get('#root > section > div > main > div > div > div > div > div.ant-result-extra > a > button').click()

    cy.get('#rc_select_0').type('Job with Album without photo')

     
    cy.get('.ant-select-item-option-content').click()
    cy.get('#root > section > div > main > div > div.ant-card.login_CodeEntryCard__39Boe.Card_Card__1TsDG.ant-card-bordered > div.ant-card-body > form > div.ant-row.ant-legacy-form-item.login_formItemPrimaryButton__2YDQm > div > div > span > button').click()

       
  })

})
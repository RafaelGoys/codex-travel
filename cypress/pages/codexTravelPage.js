class codexTravelPage {
    //classe onde mapeamos nossos elementos e realizamos nossas ações

    valorPassagem = '#valorPassagem'
    numeroPessoas = '#numeroPessoas'
    diasHospedagem = '#diasHospedagem'
    dataNascimento = '#dataNascimento'
    btnCalcular = '#orcamentoForm > button'
    nome = '#nome'
    email = '#email'
    mensagem = '#mensagem'
    btnEnviar = '#contatoForm > button'
    sessaoSobreNos = 'ul > :nth-child(2) > a'

    acessarSite() {
        cy.visit('http://localhost:60730/cypress/fixtures/index.html')
        /*passo para acessar site
        obs: necessário configurar um servidor http local
        no caso, foi executado o comando 'npm install -g serve' no terminal e depois o comando 'serve -l 8080 .' na raiz do projeto.*/
    }

    preencherDadosCalculo() {
        cy.get(this.valorPassagem).type('1000')
        cy.get(this.numeroPessoas).type('2')
        cy.get(this.diasHospedagem).type('2')
        cy.get(this.dataNascimento).type('2004-05-06')
        cy.get(this.btnCalcular).click()
        cy.contains('Orçamento total: R$ 4000.00').should('be.visible')
        //passo para preencher dados da Calculadora e validar o orcamento total retornado
    }

    preencherDadosEntrarEmContato(nomeValue, emailValue, msgValue) {
        cy.get(this.nome).type(nomeValue)
        cy.get(this.email).type(emailValue)
        cy.get(this.mensagem).type(msgValue)
        //passo para preencher dados de Contato
    }

    validarMsgSobreNos(msgSobreNosValue) {
        cy.contains(msgSobreNosValue).should('be.visible')
        //validar mensagem exibida na sessao Sobre Nos
    }

    clicarSessaoSobreNos() {
        cy.get(this.sessaoSobreNos).click()
        //clique na sessao Sobre Nos
    }

    validarMsgSucesso(msgSucessoValue) {
        cy.get(this.btnEnviar).click()
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.eq(msgSucessoValue);
            //validar mensagem de sucesso ao enviar contato, validacao feita no alert que e exibido
        });
    }
}
export default new codexTravelPage();
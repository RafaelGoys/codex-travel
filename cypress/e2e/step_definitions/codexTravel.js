import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor"
import codexTravelPage from '../../pages/codexTravelPage'

//classe onde chamamos nossas funcoes criadas no page e fazemos conexao com nossos cenarios de teste

Given("que acesso o site codex travel", () => {
    codexTravelPage.acessarSite()
})

When("preencher dados para realizar calculo", () => {
    codexTravelPage.preencherDadosCalculo()
})

When("preencher dados para entrar em contato {string} {string} {string}", (nomeValue, emailValue, msgValue) => {
    codexTravelPage.preencherDadosEntrarEmContato(nomeValue, emailValue, msgValue)
})

Then("valido a mensagem sobre nos {string}", (msgSobreNosValue) => {
    codexTravelPage.validarMsgSobreNos(msgSobreNosValue)
})

When("clicar na sessao sobre nos", () => {
    codexTravelPage.clicarSessaoSobreNos()
})

Then("valido a mensagem de sucesso {string}", (msgSucessoValue) => {
    codexTravelPage.validarMsgSucesso(msgSucessoValue)
})

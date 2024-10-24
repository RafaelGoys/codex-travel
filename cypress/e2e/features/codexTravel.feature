Feature: Codex travel
#classe onde criamos nossos cenários de teste

  @teste
  Scenario Outline: Realizar um calculo e enviar contato
    Given que acesso o site codex travel
    When preencher dados para realizar calculo
    And preencher dados para entrar em contato '<nomeValue>' '<emailValue>' '<msgValue>'
    Then valido a mensagem de sucesso '<msgSucessoValue>'

    Examples:
      | nomeValue          | emailValue                 | msgValue                       | msgSucessoValue               |
      | testeNomeAutomacao | testeAutomacao@hotmail.com | Gostaria de entrar em contato! | Mensagem enviada com sucesso! |

  @teste
  Scenario Outline: Validar que o campo nome nao pode ter menos que 3 caracteres ao enviar contato
    Given que acesso o site codex travel
    When clicar na sessao sobre nos
    Then valido a mensagem sobre nos '<msgSobreNosValue>'

    Examples:
      | msgSobreNosValue                                                                                                                                                      |
      | Somos uma empresa dedicada a tornar suas férias inesquecíveis. Com mais de 10 anos de experiência, garantimos a melhor experiência de viagem para você e sua família. |

      #obs: para funcionar o cenário acima, apenas trocar pela mensagem que é exibida no site. o assert está baseado no que DEVERIA retornar, e não o que está retornando no momento.

const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').default;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    specPattern: 'cypress/e2e/features/*.feature',
    supportFile: 'cypress/support/e2e.js',
    stepDefinitions: 'cypress/e2e/step_definitions',

  },
});

/*BAIXAR AS DEVIDAS DEPENDÊNCIAS PARA O TESTE FUNCIONAR E RECONHECER OS ARQUIVOS .FEATURE
npm install --save-dev cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor
npm install --save @cucumber/cucumber*/

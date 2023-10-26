# Setting up a testing environment in a React + TypeScript application with Cypress

The current folder structure is created by Cypress upon installation. For reference or further info, please take a look at:

-   Cypress official documentation - [https://docs.cypress.io/](https://docs.cypress.io/)

## Pre-requisites

-   React application writen in TypeScript
-   React 18 (The latest version in this case)

## Required Packages

To setup Cypress in your project, please install the following packages as project `developer dependencies`:

-   cypress

Then proceed with the setup by following this guide: [https://www.browserstack.com/guide/how-to-test-react-using-cypress](https://www.browserstack.com/guide/how-to-test-react-using-cypress).

**Note**: In this application Cypress is already installed, configured and ready to use.

## Project Scripts

```bash
"scripts": {
    ...
    "test": "cypress open --component",
    ...
}
```

## Cypress folder structure

```
├── cypress
│   ├── component
│   │   └── ...
│   ├── fixtures
│   │   └── ...
│   └── support
│       └── ...
├── cypress.config.ts
├── package.json
├── tsconfig.json
└── webpack.config.ts
```

-   `component` folder: Contains Cypress component specs.
-   `fixtures` folder: Any data which can be used inside the specs can be placed here.
-   `support` folder: helper functions, utilities, any reusable code, and custom commands can be placed here.
-   `support/component.ts`: Great place to put the global configuration and reusable code.
-   `support/commands.ts`: In this file, you can create custom commands or override existing commands.
-   `cypress.config.ts`: This file contains runtime configurations such as devServer, framework, bundler, reporter, videos, screenshot options, etc.

## Test the environment

Please, take a look at the example component implemented in `./src/components/Counter` folder and respective unit tests implemented in `./cypress/component/Counter.cy.ts` file. When running the `test` script the Cypress UI will open and prompt you to choose a browser to perform your component testing.

## Code coverage

Cypress does not have a code coverage feature configured out of the box. It is possible to configure code coverage but the process is not simple and requires configuring various tools manually to achieve that purpose. Currently, code coverage is not configured in this project.

## References used for this configuration

-   [https://www.browserstack.com/guide/how-to-test-react-using-cypress](https://www.browserstack.com/guide/how-to-test-react-using-cypress)
-   [https://www.browserstack.com/guide/cypress-component-testing](https://www.browserstack.com/guide/cypress-component-testing)

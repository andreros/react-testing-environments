# Setting up a testing environment in a React + TypeScript application with Playwright

The current folder structure is created by Playwright upon installation. For reference or further info, please take a look at:

-   Playwright official documentation - [https://playwright.dev/docs/intro](https://playwright.dev/docs/intro)

## Pre-requisites

-   React application writen in TypeScript
-   React 18 (The latest version in this case)

## Required Packages

To setup Playwright in your project, please install the following packages as project `developer dependencies`:

-   @playwright/experimental-ct-react

Then proceed with the setup by following this guide: [https://kailash-pathak.medium.com/lets-get-start-playwright-as-component-testing-4c82ffaadb7c](https://kailash-pathak.medium.com/lets-get-start-playwright-as-component-testing-4c82ffaadb7c).

**Note**: In this application Playwright is already installed, configured and ready to use.

## Project Scripts

```bash
"scripts": {
    ...
    "test": "playwright test -c playwright-ct.config.ts && playwright show-report",
    ...
}
```

## Cypress folder structure

```
├── playwright
│   ├── .cache
│   │   └── <cache files>
│   ├── index.html
│   └── index.tsx
├── playwright-report
│   └── index.html
├── playwright-ct.config.ts
├── package.json
├── tsconfig.json
└── webpack.config.ts
```

-   `playwright` folder: The folder where the playwright test application will run from.
-   `playwright-report` folder: The folder to where the test results report will be generated.
-   `playwright-ct.config.ts`: Playwright project configuration. This file also includes tools like "Vite" configurations.

## Test the environment

Please, take a look at the example component implemented in `./src/components/Counter` folder and respective unit tests implemented in `./tests/unit/components/Counter/Counter.spec.ts` file. After running the `test` script, the report generation script will also be run and opened in the browser automatically.

## Code coverage

Playwright does not have a code coverage feature configured out of the box. It is possible to configure code coverage but the process is not simple and requires configuring various tools manually to achieve that purpose. Currently, code coverage is not configured in this project.

## References used for this configuration

-   [https://kailash-pathak.medium.com/lets-get-start-playwright-as-component-testing-4c82ffaadb7c](https://kailash-pathak.medium.com/lets-get-start-playwright-as-component-testing-4c82ffaadb7c)

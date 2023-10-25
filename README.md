# Unit Testing in React

Unit testing in React can be made through the help of different tools. In order to use any of those tools, the application testing environment must be set up. Setting up the testing environment is not always a straight forward task and can be very time consuming.

The React Testing Environments application bundle purpose is to gather several pre-configured, ready to use sample applications, each one with a clean working test environment with the various technologies available.

## Applications base tech stack

- `React` framework (with Typescript) for the overall application development;
- `Typescript` coding language;
- `SASS` style pre-processor to build the needed application styles;
- `Axios` to communicate with the backend API;
- `DotEnv` to load project environment variables;
- `PicniCSS` lightweight CSS framework for UI styling;

## Applications support tools

- `Prettier` for code formatting;
- `Webpack` to bundle the application and serve it in development mode;

## Testing environments

| Application            | React | Testing Environment          |
| ---------------------- | ----- | ---------------------------- |
| `react-16-jest-enzyme` | 16    | Jest + Enzyme                |
| `react-18-jest-rtl`    | 18    | Jest + React Testing Library |

## Single application installation and bootstrap

From the project root folder, please choose one application from the table above. Go to the application folder and execute the following commands in a terminal window:

```bash
# example for the `react-16-jest-enzyme`
cd react-16-jest-enzyme

# install the application
npm i

# run the application in development mode
npm start

# or
npm run dev

# run the unit tests suite
npm run test

# run the unit tests suite with coverage report generation
npm run test:coverage
```

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// enzyme setup for a react 17 project
const Enzyme = require('enzyme');
// instead of a hypothetical `enzyme-adapter-react-17`, we need to use the unofficial adapter
// https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

Enzyme.configure({ adapter: new Adapter() });

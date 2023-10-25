/* React 16 application rendering code */
import * as React from 'react';
import { render } from 'react-dom';

import { App } from './App';

const rootElement = document.getElementById('root');
render(<App />, rootElement);
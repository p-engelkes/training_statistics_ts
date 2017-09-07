import * as React from 'react';
import * as DOM from 'react-dom';
import {App} from "./app";
import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const root = document.getElementById('root');

DOM.render(
    <App />,
    root
);
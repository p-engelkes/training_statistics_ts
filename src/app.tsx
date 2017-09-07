import configureStore from './store';
import * as React from "react";
import {Provider} from "react-redux";
import {Routing} from "./router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const store = configureStore();

export const App = () => (
    <Provider store={store}>
        <MuiThemeProvider>
            <Routing />
        </MuiThemeProvider>
    </Provider>
);
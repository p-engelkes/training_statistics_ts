import configureStore from './store';
import * as React from "react";
import {Provider} from "react-redux";
import {Routing} from "./router";

const store = configureStore();

export const App = () => (
    <Provider store={store}>
        <Routing />
    </Provider>
);
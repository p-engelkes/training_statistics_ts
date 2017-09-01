import configureStore from './store';
import * as React from "react";
import {Provider} from "react-redux";
import {Home} from "./home";

const store = configureStore();

export const App = () => (
    <Provider store={store}>
        <Home />
    </Provider>
);
import createHistory from 'history/createBrowserHistory';
import {applyMiddleware, compose, createStore, Middleware} from 'redux';
import {makeRootReducer} from './reducer';
import {firebase as firebaseConfig, reduxFirebase} from './config';
import {reactReduxFirebase} from 'react-redux-firebase';
import * as firebase from 'firebase';
import {routerMiddleware} from "react-router-redux";

firebase.initializeApp(firebaseConfig);

export const history = createHistory({basename: "/"});
const reduxRouterMiddleware = routerMiddleware(history);

export default function configureStore() {
    const middlewares: Middleware[] = [reduxRouterMiddleware];
    return createStore(
        makeRootReducer(),
        compose(
            reactReduxFirebase(firebase, reduxFirebase)
        ),
        applyMiddleware(...middlewares)
    );
}
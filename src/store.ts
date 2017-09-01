import {compose, createStore} from 'redux';
import {makeRootReducer} from './reducer';
import {firebase as firebaseConfig, reduxFirebase} from './config';
import {reactReduxFirebase} from 'react-redux-firebase';
import * as firebase from 'firebase';

firebase.initializeApp(firebaseConfig);

export default function configureStore() {
    return createStore(
        makeRootReducer(),
        compose(
            reactReduxFirebase(firebase, reduxFirebase)
        )
    );
}
import {combineReducers} from 'redux';
import { firebaseStateReducer as firebase} from 'react-redux-firebase';
import {routeReducer} from 'react-router-redux';

export const makeRootReducer = () => {
    return combineReducers({
        firebase,
        routing: routeReducer
    });
};
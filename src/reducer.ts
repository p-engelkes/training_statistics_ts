import {combineReducers} from 'redux';
import { firebaseStateReducer as firebase} from 'react-redux-firebase';

export const makeRootReducer = () => {
    return combineReducers({
        firebase,
    });
};

import {combineReducers} from 'redux';

import passport from './loginData-reducer';


const rootReducer = combineReducers({
    passport
});

export default rootReducer;
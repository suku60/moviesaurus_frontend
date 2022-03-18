
import {combineReducers} from 'redux';

import passport from './loginData-reducer';
import search from './movieData-reducer';


const rootReducer = combineReducers({
    passport,
    search
});

export default rootReducer;
import {LOGIN, LOGOUT, UPDATE_PASSPORT} from '../types';

const initialState = {
    token : '',
    user : {}
};

const loginDataReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN :
            return action.payload;

        case LOGOUT : 
            return initialState;
        
        case UPDATE_PASSPORT :
            return {...state, user: action.payload};

        default :
            return state
    }
}

export default loginDataReducer;
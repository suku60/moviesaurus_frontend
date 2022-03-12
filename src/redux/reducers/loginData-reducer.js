import {LOGIN, LOGOUT, UPDATE_USERPASSPORT} from '../types';

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
        
        case MODIFY_CREDENTIALS :
            return {...state, usuario: action.payload};

        default :
            return state
    }
}

export default loginDataReducer;
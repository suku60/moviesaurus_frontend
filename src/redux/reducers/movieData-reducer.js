import {MOVIESLOG, SEARCHLOG} from '../types';

const initialState = {
    movies: {},
    search_movie: []
};

const movieDatareducer = (state = initialState, action) => {
    switch(action.type){
        case MOVIESLOG :
            return {...state, movies: action.payload};

        case SEARCHLOG :
            return {...state, search_movie: action.payload};

        default :
            return state
    }
}

export default movieDatareducer;
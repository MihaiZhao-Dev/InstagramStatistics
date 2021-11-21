import {ADD_QUERY, START_LOADING, STOP_LOADING} from "../types/data";

const initialState = {
    loading: false,
    queries: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                loading: true
            }
        case STOP_LOADING:
            return {
              ...state,
              loading: false
            };
        case ADD_QUERY:
            return {
                ...state,
                data: state.queries.push(action.payload)
            };
        default:
            return state;
    }
};

export default rootReducer;
import axios from '../../services/httpService';
import {ADD_QUERY, START_LOADING, STOP_LOADING} from "../types/data";

export const addQuery = (url) => dispatch => {
    dispatch({ type: START_LOADING });
    axios
        .post('/api', { url })
        .then(({ data }) => {
            dispatch({ type: STOP_LOADING });
            const { followers, following, posts } = data;
            dispatch({ type: ADD_QUERY, payload: { url, followers, following, posts }});
            return data;
        })
        .catch(e => {
            dispatch({ type: STOP_LOADING });
            console.error(e);
        })
    ;

}
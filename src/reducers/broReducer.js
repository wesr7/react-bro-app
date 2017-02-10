import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function broReducer(state = initialState.bros, action) {
    switch(action.types) {
        case types.LOAD_BROS_SUCCESS:
            return action.bros
        default:
            return state;
    }
}
import broApi from '../api/broApi';
import * as types from './actionTypes';

export function loadBros() {
    return function(dispatch) {
        return broApi.getAllBros().then(bros => {
            dispatch(loadBrosSuccess(bros));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadBrosSuccess(bros) {
    return {type: types.LOAD_BROS_SUCCESS, bros};
}
import * as actionTypes from './actionsTypes';

export const storeResultAsync  = (res) => {
    return dispatch => {
        setTimeout(()=>{
            dispatch(storeResult(res));
        }, 2000);    
    }
}

export const storeResult  = (res) => {
    return {
        type: actionTypes.STORE,
        result: res
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE,
        resultElementId : id
    }
};
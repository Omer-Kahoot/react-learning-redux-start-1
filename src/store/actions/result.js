import * as actionTypes from './actionsTypes';

export const storeResultAsync  = (res) => {
    return (dispatch, getState) => {
        setTimeout(()=>{
            //Can be used to get state over here (built in feature of redux thunk. Not recommended to use alot of features over here.)
            //const oldCounter = getState().ctr.counter;
            //console.log(oldCounter);
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
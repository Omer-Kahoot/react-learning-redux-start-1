export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE = 'STORE';
export const DELETE = 'DELETE';

export const increment  = () => {
    return {
        type: INCREMENT
    }
};

export const decrement  = () => {
    return {
        type: DECREMENT
    }
};

export const add  = (value) => {
    return {
        type: ADD,
        value: value
    }
};

export const subtract  = (value) => {
    return {
        type: SUBTRACT,
        value: value
    }
};

export const storeResultAsync  = (res) => {
    return dispatch => {
        setTimeout(()=>{
            dispatch(storeResult(res));
        }, 2000);    
    }
}

export const storeResult  = (res) => {
    return {
        type: STORE,
        result: res
    }
};

export const deleteResult = (id) => {
    return {
        type: DELETE,
        resultElementId : id
    }
};

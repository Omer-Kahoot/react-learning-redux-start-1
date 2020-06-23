import * as actionTypes from '../actions/actionsTypes';
import updateObject from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state,action) => {
    const updatedArray = state.results.filter(el => action.resultElementId !== el.id);
    return updateObject(state, {results : updatedArray});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE :
            //return { ...state, results : [...state.results, {id: new Date(), value: state.counter}]}
            return { ...state, results : [...state.results, {id: new Date(), value: action.result}]}
        case actionTypes.DELETE:
            return deleteResult(state, action);
            //One way of deleting from an array immutably. return {...state, results: [...state.results].splice(action.value, 1)}\
            //const updatedArray = state.results.filter((el, index) => index !== action.value);
            
    }    

    return state;
}

export default reducer;
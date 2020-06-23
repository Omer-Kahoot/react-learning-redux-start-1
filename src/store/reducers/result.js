import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE :
            //return { ...state, results : [...state.results, {id: new Date(), value: state.counter}]}
            return { ...state, results : [...state.results, {id: new Date(), value: action.result}]}
        case actionTypes.DELETE:
            //One way of deleting from an array immutably. return {...state, results: [...state.results].splice(action.value, 1)}\
            //const updatedArray = state.results.filter((el, index) => index !== action.value);
            const updatedArray = state.results.filter(el => action.resultElementId !== el.id);
            return {
                ...state,
                results : updatedArray
            }
    }    

    return state;
}

export default reducer;
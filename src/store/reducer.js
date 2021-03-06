import * as actionTypes from './actions/actionsTypes';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign ({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return { ...state, counter: state.counter - 1 }
        case actionTypes.ADD:
            return { ...state, counter: state.counter + action.value }
        case actionTypes.SUBTRACT:
            return { ...state, counter: state.counter - action.value }
        case actionTypes.STORE :
            return { ...state, results : [...state.results, {id: new Date(), value: state.counter}]}
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
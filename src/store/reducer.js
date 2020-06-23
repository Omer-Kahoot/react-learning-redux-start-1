const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const newState = Object.assign ({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 }
        case 'ADD':
            return { ...state, counter: state.counter + action.value }
        case 'SUBTRACT':
            return { ...state, counter: state.counter - action.value }
        case 'STORE' :
            return { ...state, results : [...state.results, {id: new Date(), value: state.counter}]}
        case 'DELETE':
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
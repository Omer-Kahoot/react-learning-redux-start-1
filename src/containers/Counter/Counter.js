import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddValue(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractValue(5)}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(sr=>(
                        <li key={sr.id} onClick={() =>this.props.onDeleteResult(sr.id)}>{sr.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter : () => dispatch({type: actionTypes.DECREMENT}),
        onAddValue : (value) => dispatch({type: actionTypes.ADD, value: value}),
        onSubtractValue : (value) => dispatch({type: actionTypes.SUBTRACT, value: value}),
        onStoreResult : (result) => dispatch({type: actionTypes.STORE, result : result}),
        onDeleteResult : (id) => dispatch({type: actionTypes.DELETE, resultElementId : id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
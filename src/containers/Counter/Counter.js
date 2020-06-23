import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <button onClick={this.props.onStoreResult}>Store Result</button>
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
        ctr: state.counter,
        storedResults: state.results
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter : () => dispatch({type: 'DECREMENT'}),
        onAddValue : (value) => dispatch({type: 'ADD', value: value}),
        onSubtractValue : (value) => dispatch({type: 'SUBTRACT', value: value}),
        onStoreResult : () => dispatch({type: 'STORE'}),
        onDeleteResult : (id) => dispatch({type: 'DELETE', resultElementId : id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
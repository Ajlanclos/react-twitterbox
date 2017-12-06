import {createStore, applyMiddleware} from 'redux';
import indexReducer from '../reducers/indexReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function storeConfig(initialState) {
    return createStore(
        indexReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
}
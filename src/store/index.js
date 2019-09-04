import {createStore, applyMiddleware} from 'redux';
import  reducer from '../reducers';
import  thunk from 'redux-thunk'


const INITIAL_STATE = {
     users : []
}

export const store =  createStore(reducer, INITIAL_STATE , applyMiddleware(thunk));
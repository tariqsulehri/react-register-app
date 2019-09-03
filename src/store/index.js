import {createStore, applyMiddleware} from 'redux';
import  reducer from '../reducers';
import  thunk from 'redux-thunk'


const INITIAL_STATE = [
    {id:1, name:'Jazz Cricket'}, {id:2 , name:'Crickwick'}, {id:3 , name:'U-Fone Cricket'}
]

export const store =  createStore(reducer, INITIAL_STATE , applyMiddleware(thunk));
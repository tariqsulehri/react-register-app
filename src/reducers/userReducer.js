import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = [
    {id:1, name:'Jazz Cricket'}, {id:2 , name:'Crickwick'}, {id:3 , name:'U-Fone Cricket'}
]

function userReducer(state = INITIAL_STATE, action){

    switch(action.type){
     case actionTypes.ADD_USER :{
         return add_user(state, action);
     }    
     
     default:
         return state;
    }

}

export default userReducer;

function add_user(state, action){
       console.log(state, action);
       return state.concate(action.payload);
}
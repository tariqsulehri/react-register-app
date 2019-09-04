import * as actionTypes from '../actions/actionTypes';
//import {getUsers, saveUser}     from  '../services/userService';

const INITIAL_STATE = {
       
}

function userReducer(state = INITIAL_STATE, action){

    switch(action.type){
     case actionTypes.ADD_USER :{
         return add_user(state, action);
     }   
     case actionTypes.FETCH_USERS :{
         return fetch_user(state, action);
     }    
     
     default:
         return state;
    }

}

export default userReducer;

 function add_user(state, action){
//    try{
//        const {data}  = await saveUser('users', action.payload);
//        console.log("Reducer Called :",data);  
       
//    }catch(ex){
//         console.log("Error");
//    } 
}

 function fetch_user(state){
    // try{
    //     const {data}  = await getUser('users');
    //     return { ...state , items : data } 
        
    // }catch(ex){
    //      console.log("Error");
    // } 
 }
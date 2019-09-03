import {ADD_USER, EDIT_USER ,FETCH_USERS, FILTER_USER, DELETE_USER}  from './actionTypes';
import uuid from 'uuid';


export const add_user=({name=''},)=>({
    type: ADD_USER,
    payload: {id:uuid(), name: name}
});

export const edit_user=(id)=>({
    type: EDIT_USER,
    payload: id
});


export const delete_user=(id)=>({
    type: DELETE_USER,
    payload: id
});

export const fetch_user=(users)=>({
    type: FETCH_USERS,
    payload: users
});

export const filter_user=(id)=>({
    type: FILTER_USER,
    payload: id
});


const addUser=()=>{



}

const editUser=()=>{

    
}

const deleteUser=()=>{

    
}

const filterUser=()=>{

    
}

const fetchUsers=()=>{

    
}

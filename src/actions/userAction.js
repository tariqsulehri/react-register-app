import {ADD_USER, EDIT_USER ,FETCH_USERS, FILTER_USER, DELETE_USER}  from './actionTypes';

export const add_user=(user)=>({
             type: ADD_USER,
             user
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


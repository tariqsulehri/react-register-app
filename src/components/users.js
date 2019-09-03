import React from 'react';
import User  from './user';

const Users = ({Users}) => (
        <div>
            {(Users || []).map((user , i)=>
                <div key={user.id}>
                    <User user={user} /> 
                    <hr/>  
                </div>         
            )}
        </div>
)
   
export default Users;

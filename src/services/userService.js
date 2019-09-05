import  httpService        from './httpService';

// export function saveUser(user){
    //    return http.post(apiUrl, user);  
    // }

    
export function getUsers(){
    console.log("....Fetch Users....");
    return httpService.get('users');  
}

export function saveUser(user){
    console.log("....Save....", {user});
    return httpService.post("/users",user);  
}

export function editUser(user){
    console.log("....Edit...", {user});
    return httpService.put("/users",user);  
}
  
export function deleteUser(id){
    console.log("....Delete...", {id});
    return httpService.delete("/users", id);  
}


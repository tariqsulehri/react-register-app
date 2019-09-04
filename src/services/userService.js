import  httpService        from './httpService';

// export function saveUser(user){
    //    return http.post(apiUrl, user);  
    // }

    
export function getUsers(){
        return httpService.get('users');  
}

export function saveUser(user){
    console.log("....", user);
    return httpService.post('users',user);  
}
  

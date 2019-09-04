import axios from   'axios';
import {apiEndpoint} from  '../config.json';

axios.interceptors.response.use(null, error=>{
  
    const expectedError = error.response &&
                          error.response.status  >= 400 &&
                          error.response.status  <= 500 ; 
    if(!expectedError){
        console.log('Logging Un-Expected Error :', error);
        alert('An Un-Expected Error has occoured udring processing..!');
    }                           

    return Promise.reject(error);

});

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

export default axios.create({
    baseURL : apiEndpoint //"https://jsonplaceholder.typicode.com/" 
});


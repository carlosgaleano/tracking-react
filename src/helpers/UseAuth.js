//import axios from "axios";
//import { useAuthStore } from '../store/auth.ts';
import axios from '../libs/axios.js';

export const LoginRequest=  async(email, password)=>{

    const config = {
        method: 'post',
        url: '/login',
        headers: {
          'Content-Type': " application/json",
          'application/json': 'text/plain, */*'
      },
        data:`
       {
  "data": {
    "type": "token",
    "attributes": {
      "email": "${email}",
      "password":"${password}"
    }
  }
}
        `
    };

   // console.log(config);
//return  axios(config);
//return await axios.post('http://localhost/api/v1/login',{email,password});
return await axios.post('/login',{email,password});
}

export const ProfileRequest= async ()=>{
  //const token=useAuthStore.getState().token;
  //console.log('token',token);
  //axios.defaults.headers.common['Authorization']=`Bearer ${token}`;
 // return await axios.get('http://localhost/api/v2/me');
 //return await axios.get('https://apitsa.logytechchile.cl/api');
}

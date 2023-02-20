import axios from "axios";
//import axios from '../libs/axios.js';


export const LoginRequest=  async(email:String, password:string)=>{

    const config = {
        method: 'post',
        url: '/login',
        headers: {
          'Content-Type': " application/json",
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
return  axios(config);
//eturn await axios.post('/login',{email,password});

}


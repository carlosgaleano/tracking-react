import React, {
    useState,
  
} from 'react';
import axios from "axios";

const GetDespachos = (page) => {

    const [despachos, setDespachos] = useState([]);
    const config = (pag) => ({
        method: "get",
        Host: '<calculated when request is sent></calculated>',
        url: `http://localhost/api/v1/despachosx?page=${pag}`,
        headers: {
            'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiYzk1OGY0NTMwNTllZWFiMzNjYzg2NzNjMDQwYWFhYzY3NGIxNWIyYTZmYzkxYjBiMjJjNDIwM2IxMzYxZGFhYTg5OTZjNjVjOGZhZGI1ZmIiLCJpYXQiOjE2NzUzNzE1NDguNDk3Njg5LCJuYmYiOjE2NzUzNzE1NDguNDk3NjkzLCJleHAiOjE3MDY5MDc1NDguNDcxODQ4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.vCc5x6JIPq8v7hQpH7feXpZiWvmYS6l7yS0gNvTMC4lvvZTF2st3AR8GJHXnUBPPISLkcz5fOQVJLxjloBpo1YFowPM1_pn2Ls79UdeY8K6KY1HOjOLOeqlkHEAaGMF4YNZ2DSqeI3V9RcULt6hY30iYWra4zY3TfOtsUsLPCk7JO8mE8sLZds2sbS58e0lgErqai8EfRx1mthoHqgyrFI_KaHGpSBwEujOxuHPVKiW6qGG1oWnExT7UjJAGQ7SxUBGwaX4JZy70tu2lo9ItZsHHvI09Nv5Tts5f71bE4MlxFSEOCBNIKD5INVZ_9b7acsp62q8aLNGFd-nzhMnd7wsaWlB6tf8MgFcxdjmMtrRoIswjOrmLAr9L1QhrMaqv8FOjlBxq0gLaSIdlVMkdOvj3MbtZUeEtjN08NAxfX5XQNJiljHfJEauxjF_okkpTTZ6x7PP4gPjL-87r-irP-QyazTVEWJlh_WLxHNSxGZL5s7Anl3XDWDl1P4uyaSRQYQXBk1-e3LYNoOEgPMciwmY2OOKVHRbzPPmLKeWEZkYExaZHYroKZc2mQcflo2tNxQjDLSqQd5t11WTWc0L_ySeJYoXL-yppylSmMUwv5g5VMYPMoln38Ol5LAqvziTza69GQ8yuLD7bXr0P96wtqMVGIGqe_Vq5tm6kXVFebPI",
        },
    });

    const generateRequest = (pag = null) => {
        console.log('numero de pagina', pag);
        pag = pag == null ? 1 : pag;
        axios(config(pag))
            .then(function (response) {
                setDespachos(response.data);
               // console.log(Object.values(response.data));
               // console.log('datos request', config(pag));
            })
            .catch(function (error) {
                console.log(error);
            });
    };

  return despachos;
}

export default GetDespachos
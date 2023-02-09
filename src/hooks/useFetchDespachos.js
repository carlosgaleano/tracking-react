import  {useState,useEffect} from 'react';
import {getDespachos} from '../helpers/getDespachos';

export const useEffectDespachos =async  (page,callback)=>{

  const [despachos, setDespachos] = useState({});

/* 
  const result=await getDespachos(page)
  console.log(result) ; */

 useEffect(() => {

   getDespachos(page)
  .then(result=> {
    console.log('page',page,'response',result);
    return result} )
   setDespachos(["{current_page: 1, data: Array(15), first_page_url: 'http://localhost/api/v1/despachosx?page=1', from: 1, last_page: 7159, …}"]);
  //console.log('page',page,'response',result);
 console.log('despachos',despachos);

       // setDespachos(data);
  }, [page]);
  
  
 
}


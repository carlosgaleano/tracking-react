
//import axios from "axios";
import axios from '../libs/axios.js';
export const getDespachoDetalle = async (page,despachoId) => {

  
 const {data}= await axios.post(`/despachodetalle?page=${page}`, {
    despacho_id: despachoId 
});
  return data;
 }

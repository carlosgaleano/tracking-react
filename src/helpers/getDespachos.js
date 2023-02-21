
//import axios from "axios";
import axios from '../libs/axios.js';
export const getDespachos = async (page) => {

 const {data}= await axios.get(`/despachosx?page=${page}`);
  return data;
 }

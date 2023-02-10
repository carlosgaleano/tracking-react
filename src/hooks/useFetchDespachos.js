import { useState, useEffect } from "react";
import { getDespachos } from "../helpers/getDespachos";

export const useEffectDespachos = (page,setpending) => {
  const [state, setState] = useState({
    data: [],
    totalRow:null,
    totalPage:null,
    currentPage:null,
    
  
  });
 // setpending(true);
  useEffect(() => {
    getDespachos(page)
    .then((despachos) => {
      console.log("page", page, "response", despachos);
      setState({
        data: Object.values(despachos.data),
        totalPage:null,
        totalrow:null,
        currentPage: despachos.current_page ,
       
      });
      setpending(false);
    });
  }, [page]);

  return state;
};

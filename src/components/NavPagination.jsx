import React from 'react'
import {ToolBar} from './ToolBar';
import {SelectRowTable} from  './SelectRowTable';
import {compact} from 'lodash/compact';
export const NavPagination=({data})=>{

    const {setpage,totalrow,totalPage,currentPage,setpending,pending} =data;

/*     const classDiv_1 = compact([
        'class_0',
        pending ? 'displayOff' : 'displayOn',
       
       ]).joint(' ');  */
       
       // => "class_0 class_1"
    //setpending(true);
    return(
        <>
            <nav >
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
         
              aria-label="previous page"
            >
              Previous
            </button>
          </li>
      
          <li className="page-item">
            <button
              className="ml-1 page-link "
            
              aria-label="next page"
       
            >
              Next
            </button>
            
          </li >
          <li className= "ml-1"  >
            <ToolBar data={{setpage,setpending}} />
          </li>
          
          <div className='d-inline border border-light rounded ml-1 mb-3'>
            
            <li className= "d-inline ml-1"><span ><strong> Item:</strong>{totalrow}</span></li>
          <li className="d-inline ml-1"><span> <strong>Paginas</strong> :{totalPage}</span></li>
          <li className="d-inline ml-1"><span><strong>Actual Page</strong> :{currentPage}</span></li>
          <li className='d-inline ml-1' > <SelectRowTable />  </li> 
            </div>     
            
        </ul>
         
          
      </nav>


        </>
        
    );


}
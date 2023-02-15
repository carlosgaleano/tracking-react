import React,{useState} from 'react';
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button';
import {useEffectDespachos} from '../hooks/useFetchDespachos';
import {Loading} from './Loading';

 const DataGridDespachos = ()=>{

  const [page, setpage] = useState(1);
 const [pending, setpending] = useState(true);


const {data:data,currentPage:currentPage}= useEffectDespachos(page,setpending);

const  getRandomIntInclusive=(min, max)=> {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('datos,',data[1]);
console.log('page actual',currentPage);
const columns = [
    {
      name: "Orden de Entrega",
      selector: (row) => row.sap_id,
    },
    {
      name: "Id FULL Star",
      selector: (row) => row.Despacho_ID,
    },
    {
      name: "Titulo",
      selector: (row) => row.Nombre,
    },
    {
      name: "Dirección",
      selector: (row) => row.Direccion,
    },
    {
      name: "Fecha despacho",
      selector: (row) => row.fecha_st,
      format: "datetime",
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => row.estado_out,
    },
  ];


  const onChangePage=  (e)=>{

    const current_page=parseInt(e.target.value)
   setpending(true);
    console.log('page final',current_page,'tipo de dato', typeof(current_page) ); 
   //let pagea=(11+getRandomIntInclusive(2,101));

  const pagea=( current_page+1);
    setpage(pagea);
  }


    return (
        <>
          <h3>
            {" "}
    
            <i class="bi bi-truck"></i>Despachos {" "}
          </h3>
          <Button
            onClick={onChangePage }
            aria-controls="example-collapse-text"
            value={currentPage}
          >
            click
          </Button>
          <p>
            <i class="bi bi-bar-chart text-info" style={{ fontSize: 40 }}></i>
          </p>
          <DataTable
            title=" Despachos"
            columns={columns}
            data={data}
            progressPending={pending}
            progressComponent={<Loading />}
            pagination
            //paginationComponent={BootyPagination}
            selectableRows
            //selectableRowsComponent={BootyCheckbox}
          />
        </>
      );
    };
    
    export default DataGridDespachos;
    
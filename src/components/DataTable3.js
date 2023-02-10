import React,{useState} from 'react';
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button';
import {useEffectDespachos} from '../hooks/useFetchDespachos';
import {Loading} from './Loading';

 const DataGridDespachos = ()=>{

  const [page, setpage] = useState(1);
 const [pending, setpending] = useState(true);


const {data:data,currentPage}= useEffectDespachos(page,setpending);


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


  const onChangePage=(currentPage)=>{

   setpending(true);
   const pagea=(12);
   
    setpage(pagea);
  }


    return (
        <>
          <h3>
            {" "}
    
            <i class="bi bi-truck"></i>Despachos {" "}
          </h3>
          <Button
            onClick={onChangePage}
            aria-controls="example-collapse-text"
            
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
    
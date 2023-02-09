import React from 'react';
import DataTable from "react-data-table-component";
import Button from 'react-bootstrap/Button';
import {useEffectDespachos} from '../hooks/useFetchDespachos'

 const DataGridDespachos = ({page},callback)=>{

  

    //console.log(page);
const {data}= useEffectDespachos(page)
/* useEffectDespachos(page)
.then(result=>console.log(result));
const data={}; */
console.log('datos,',data)
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


  const onChangePage=()=>{

    console.log('next page');

  }


    return (
        <>
          <h3>
            {" "}
    
            <i class="bi bi-truck"></i>Tabla de Usuarios{" "}
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
           // progressPending={pending}
            //progressComponent={<Loading />}
            pagination
            //paginationComponent={BootyPagination}
            selectableRows
            //selectableRowsComponent={BootyCheckbox}
          />
        </>
      );
    };
    
    export default DataGridDespachos;
    
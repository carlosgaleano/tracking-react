import React, { useState, useEffect } from "react";
//import styledComponents from "styled-components";
import DataTable from "react-data-table-component";
import axios from "axios";
import Loading from "./Loading";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import GetDespachos from './GetDespachos';

import "../styles.css";

function getNumberOfPages(rowCount, rowsPerPage) {
  return Math.ceil(rowCount / rowsPerPage);
}
function toPages(pages) {
  const results = [];

  for (let i = 1; i < pages; i++) {
    results.push(i);
  }

  return results;
}

const DataGridDespachos = () => {
  //--configurar los hooks
  const [pending, setPending] = useState(true);
  const [users, setUsers] = useState([]);
  const Url = "https://gorest.co.in/public/v2/users";




  const config =(pag)=>( {
    method: "get",
    Host:'<calculated when request is sent></calculated>',
    url: `http://localhost/api/v1/despachosx?page=${pag}`,
    headers: {
      'Authorization':
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiODY1ZGE1OWI4ZjA5ZThjNTM3MGRhYjA0YzZkOWJiODQ5YmU3ZDQzMTA2MjIyNGI1NmUyZjFiNTNmYWQ3MjQ1ZTk5ZGI5OGViZWUyMzkxZTUiLCJpYXQiOjE2NzU4NzA5NjYuNzA0NzI1LCJuYmYiOjE2NzU4NzA5NjYuNzA0NzMsImV4cCI6MTcwNzQwNjk2Ni42NjQ2MDYsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.PwTa8rjuW-Zvw0tB-0EjqUpDxiR7mB_WaDq0Ii2NX7RMYBHang2mVTYT02TxGPZloqLWjIDwPRUEk_nN1llvESKMOlPUIK_-gsF-1WPbIWJdO-sZ4O8BAvZH4GwGa2HTSROJWmle-fag2epSI6AoYEKjP4fYdn7a82qrgKZCgCQyBQ6yYy-TtDLYmkKfLhLcdT1iO1XCPqWyy2Fc4QlG4oXzTphJXjri36st9FiQpQo0-o4sGh0b--tX6e8hNNB_OwfHbfMN3bZ2h3Xs-ml0nlndj9X6i3W7raHWuQweZrg5ZlY14jB3iDkhIgxVnOI7fATYPZSvqDD6KOKop5rJd7O579S5TASeEFPk4jllzPberi4rsDPFEn6NsT4X1oILA21zizB68JRHsmWnRNyqETZrh312hJn6feudftuKA-jHC6X9c2D83ORCzWZBNr-nfUvFhpZspJrS88WM10BmPXqK71JVlR84E6_owkR1SuV2xlS-qxrQ3Sa9uuxD924wOtsMYFbNAboSHqXI6bOneluwzTbTuMlrfi82IzInkvw6NPj147oZOpBE0ATvi9GcFKBZYHpM4JahXiXbZKptRv3ZRkUkuUdk6WFcjoYPs-yhusgTSHDhb0XY3IE5u85NJP-Q6XJjVQCcONxNQs8EBK3NK-u0EhR0Do6p7HFBj5E",
    },
  });


  const headers1 = [
   ['Host','<calculated when request is sent></calculated>'],
    ['Authorization','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiYzNmNDM5OTAwYWZkYWYyMTcxYTM1YzgzMjkzMzNlOGU5NGZkOTYxNWQyNjZkMTk4ZjFiNmQxMTNiZjM5YjdjNDllMzRmZTA0YWU5Y2VjZjYiLCJpYXQiOjE2Njk3NTQ0MjUuMjAyMzY2LCJuYmYiOjE2Njk3NTQ0MjUuMjAyMzcxLCJleHAiOjE3MDEyOTA0MjUuMTcxMTU5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.hk9---vF7_5V6--cQyFw3OTgz9clB7cpQkbTiAnZuR5p24cLljfKc3fvrCIkeDdndfVa5fPtyLpJ11XVve5cBokh7Q-Ybg6tXFauP4Kvk58jtRMnHblJKwjOGXV_qkVCs3Pa1EIXNx62yUsDyWUfRaCEshnF5I8H4ouHiybdnps5TD5V6xvrXZPSheP8Ao-1MNEKQ2GE94ok8nzWGKv7gezHqtPf_T370KKUED8Vb4Zbl0cVXA8ev_gAI9zr8aZhWdR3qWfy5lK5FzHkMulh7dTYsM0QVQzcUbdJuhIEnCE2VExI1Bf72FPG70hTKUUV0D-TeX0uStRfPj0o6Vty_8QVCMfYC3sDqxSO7ZWsjOR61QEz2vEul95s5gjnM8DT663JEAcGS-_dfkezcRnIRbSky4H5DbSg3gf0yBYk6_PGSiY5ySY4yH3FN8_N_oVbodDOEPRJf5BYTNOfocv2AESmNJEJOm3Jt6G_mfQJDtVvEoI2wkuPM4ywbimlvrGY2gMRqWCWMQk6QxufRbAtMyIkPsnKrIpqHK9WtFGwdSQgBd5Yzk-eXvoMjAJQ6fnTeR9ZNeZ_TAbDxNk2t5xA68HlyRxSAmzOVi5Qhk9moOlvq9blU4jVnmJW6oaWPEX3zUKy9jNym4QUJJ3lZo0hrDaQFsdQ19ftEcBSkq1jOjU']
  ];

  const options =()=>( {
    method: 'GET',
    headers:headers1,
   
    
  });

  const showData = () => {
    axios
      .get(Url)
      .then((res) => {
        const resp = Object.values(res.data);
        //const resp=res;
        // console.log('tipo de dato',typeof(resp));

        setUsers(resp);
        console.log(Object.values(resp));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const url1= "http://localhost/api/v1/despachosx?page=20";

  const generateRequest2= async()=>{

  const response=  await fetch(url1,options());
  const  data   =  await response.json();
 await setUsers(data.data);
 // console.log(data);
  };

  const  generateRequest = (pag=null) => {
    console.log('numero de pagina',pag);
    pag=pag==null?1:pag;
   axios(config('1'))
      .then(function (response) {
        setUsers(Object.values(response.data.data));
        console.log(Object.values(response.data));
        console.log('datos request',config(pag));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
  const notifica=()=>{
    console.log('bottón clik');
   
      //showData();
      generateRequest(2);
    

     
};
  useEffect(() => {
    //showData();
    //generateRequest2();
    generateRequest(11);
    setTimeout(() => {
      setPending(false);
    }, 50);
  }, []);

  // RDT exposes the following internal pagination properties
  const BootyPagination = ({
    rowsPerPage,
    rowCount,
    onChangePage,
    onChangeRowsPerPage, // available but not used here
    currentPage,
  }) => {
    const handleBackButtonClick = () => {
      onChangePage(currentPage - 1);
    };

    const handleNextButtonClick = () => {
      onChangePage(currentPage + 1);
    };

    const handlePageNumber = (e) => {
      onChangePage(Number(e.target.value));
    };

    
    const pages = getNumberOfPages(rowCount, rowsPerPage);
    const pageItems = toPages(pages);
    const nextDisabled = currentPage === pageItems.length;
    const previosDisabled = currentPage === 1;

    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleBackButtonClick}
              disabled={previosDisabled}
              aria-disabled={previosDisabled}
              aria-label="previous page"
            >
              Previous
            </button>
          </li>
          {pageItems.map((page) => {
            const className =
              page === currentPage ? "page-item active" : "page-item";

            return (
              <li key={page} className={className}>
                <button
                  className="page-link"
                  onClick={handlePageNumber}
                  value={page}
                >
                  {page}
                </button>
              </li>
            );
          })}
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleNextButtonClick}
              disabled={nextDisabled}
              aria-disabled={nextDisabled}
              aria-label="next page"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <>
      <h3>
        {" "}

        <i class="bi bi-truck"></i>Tabla de Usuarios{" "}
      </h3>
      <Button
        onClick={notifica()}
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
        data={users}
        progressPending={pending}
        progressComponent={<Loading />}
        pagination
        paginationComponent={BootyPagination}
        selectableRows
        //selectableRowsComponent={BootyCheckbox}
      />
    </>
  );
};

export default DataGridDespachos;

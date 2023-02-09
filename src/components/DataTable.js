import React, { useState, useEffect } from "react";
import styledComponents from "styled-components";
import DataTable, { createTheme } from "react-data-table-component";
import axios from "axios";
import Loading from "./Loading";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
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

const DataGrid = () => {
  //--configurar los hooks
  const [pending, setPending] = useState(true);
  const [users, setUsers] = useState([]);
  const Url = "https://gorest.co.in/public/v2/users";

  const config = {
    method: "GET",
    url: "http://localhost/api/v1/despachos",
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiYzNmNDM5OTAwYWZkYWYyMTcxYTM1YzgzMjkzMzNlOGU5NGZkOTYxNWQyNjZkMTk4ZjFiNmQxMTNiZjM5YjdjNDllMzRmZTA0YWU5Y2VjZjYiLCJpYXQiOjE2Njk3NTQ0MjUuMjAyMzY2LCJuYmYiOjE2Njk3NTQ0MjUuMjAyMzcxLCJleHAiOjE3MDEyOTA0MjUuMTcxMTU5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.hk9---vF7_5V6--cQyFw3OTgz9clB7cpQkbTiAnZuR5p24cLljfKc3fvrCIkeDdndfVa5fPtyLpJ11XVve5cBokh7Q-Ybg6tXFauP4Kvk58jtRMnHblJKwjOGXV_qkVCs3Pa1EIXNx62yUsDyWUfRaCEshnF5I8H4ouHiybdnps5TD5V6xvrXZPSheP8Ao-1MNEKQ2GE94ok8nzWGKv7gezHqtPf_T370KKUED8Vb4Zbl0cVXA8ev_gAI9zr8aZhWdR3qWfy5lK5FzHkMulh7dTYsM0QVQzcUbdJuhIEnCE2VExI1Bf72FPG70hTKUUV0D-TeX0uStRfPj0o6Vty_8QVCMfYC3sDqxSO7ZWsjOR61QEz2vEul95s5gjnM8DT663JEAcGS-_dfkezcRnIRbSky4H5DbSg3gf0yBYk6_PGSiY5ySY4yH3FN8_N_oVbodDOEPRJf5BYTNOfocv2AESmNJEJOm3Jt6G_mfQJDtVvEoI2wkuPM4ywbimlvrGY2gMRqWCWMQk6QxufRbAtMyIkPsnKrIpqHK9WtFGwdSQgBd5Yzk-eXvoMjAJQ6fnTeR9ZNeZ_TAbDxNk2t5xA68HlyRxSAmzOVi5Qhk9moOlvq9blU4jVnmJW6oaWPEX3zUKy9jNym4QUJJ3lZo0hrDaQFsdQ19ftEcBSkq1jOjU",
    },
  };

 
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

  //const fetch

  
  const generateRequest = () => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "NAME",
      selector: (row) => row.name,
    },
    {
      name: "EMAIL",
      selector: (row) => row.email,
    },
  ];

  useEffect(() => {
    showData();
    //generateRequest();
    setTimeout(() => {
      setPending(false);
    }, 500);
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
      <h3> Tabla de Usuarios </h3>
      <DataTable
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

export default DataGrid;
